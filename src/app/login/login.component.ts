import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
// import { ServerResponse } from 'http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../shared/models/login-response.model';
import { User } from '../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup | any;
  existingUser : User | any;
  // private headers: HttpHeaders;
  token : string = '';

  constructor(private loginService:AuthService, private router: Router, private fb: FormBuilder, private http: HttpClient, private cookieService: CookieService)
  {
    this.existingUser = new User();
    this.cookieService.set('token','aaaa');
    this.token = this.cookieService.get('token');
    console.log(this.token);
  }

  ngOnInit(): void {

    this.reactiveLoginForm();
  }

  reactiveLoginForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.loginForm = this.fb.group({
      'userEmail': [null, [Validators.required, Validators.pattern(emailregex), this.checkEmail]],
      'password': [null, [Validators.required, this.checkPassword]]
    })
  }

  get getUserEmail() {
    return this.loginForm.get('userEmail') as FormControl;
  }

  //TO-DO CHECK IF LONG STRINGS ARE NOT PASSED IN. FOR NOW JUST NOT EMPTY
  checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    return (enteredPassword==="") ? { 'requirements': true } : null;
  }

  checkEmail(control: { value: any; }) {
    let enteredUserEmail = control.value
    return (enteredUserEmail==="") ? { 'requirements': true } : null;
  }

  getErrorEmail() {
    return this.loginForm.get('userEmail').hasError('required') ? 'Field is required' :
      this.loginForm.get('userEmail').hasError('pattern') ? 'Not a valid emailaddress' : '' ;
  }

  getErrorPassword() {
    return this.loginForm.get('password').hasError('required') ? 'Field is required' :'';
  }
      
  userLogin() {
    this.existingUser.userEmail = this.loginForm.value.userEmail;
    this.existingUser.password = this.loginForm.value.password;
    this.loginService.login(this.existingUser).pipe(
      map((data: any) => {
        // let result = <ServerResponse> data;
        console.log(data);
        // console.log(data.headers.get('Cookies'));
        if(data.response === "Login successfull")
        {
          this.router.navigate(['/feed']);
        } else {
          
        }
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   ).subscribe();
  }


}
