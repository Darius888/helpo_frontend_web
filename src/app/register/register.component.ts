import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { ValidateEmail } from '../shared/models/register-validate-email.model';
import { NewUser } from '../shared/models/register.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  newUser: NewUser | any;
  validateEmail: ValidateEmail | any;

  constructor(private registerService: AuthService, private fb: FormBuilder, private router: Router, private stateService: StateService) {
    this.newUser = new NewUser();
    this.validateEmail = new ValidateEmail();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.registerForm = this.fb.group({
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'email': [null, [Validators.required, Validators.pattern(emailregex), Validators.minLength(5)], this.checkEmail.bind(this)],
      'password': [null, [Validators.required, this.checkPassword]]

    });

  }

  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkEmail(control: AbstractControl): Observable<ValidationErrors | null> {

    const value: string = control.value;
    this.validateEmail.email = value;

    return this.registerService.validateEmail(this.validateEmail).pipe(

      map((data: any) => {
        console.log(data.response);
        return (data.response === "Exists") ? { 'alreadyInUse': true } : null;
      })
    )
  }


  getErrorFirstName() {
    return this.registerForm.get('firstName').hasError('required') ? 'Field is required' : '';
  }

  getErrorLastName() {
    return this.registerForm.get('lastName').hasError('required') ? 'Field is required' : '';
  }

  getErrorEmail() {
    return this.registerForm.get('email').hasError('required') ? 'Field is required' :
      this.registerForm.get('email').hasError('pattern') ? 'Not a valid email address' :
        this.registerForm.get('email').hasError('alreadyInUse') ? 'This email address is already in use' : '';
  }

  getErrorPassword() {
    return this.registerForm.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.registerForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  userRegister() {

    this.newUser.firstName = this.registerForm.value.firstName;
    this.newUser.lastName = this.registerForm.value.lastName;
    this.newUser.email = this.registerForm.value.email;
    this.newUser.password = this.registerForm.value.password;

    this.registerService.register(this.newUser).pipe(
      map((data: any) => {
        if (data.response !== "User with such email already exists") {
          this.router.navigate(['/login']);
        } else {

        }
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    ).subscribe();

    console.log();
  }
}
