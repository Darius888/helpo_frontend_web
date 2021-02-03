import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from './shared/models/login-response.model';
import { User } from './shared/models/login.model';
import { ValidateEmail } from './shared/models/register-validate-email.model';
import { NewUser } from './shared/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;

   authenticationUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private cookieService: CookieService) { 
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Set-Cookie": "aaa"
  });
  }

  login(user: User){
    return this.http.post<User>(this.authenticationUrl + "/authenticate", user, {headers: this.headers, withCredentials: true});
  }

  register(newUser: NewUser)
  {
    return this.http.post<NewUser>(this.authenticationUrl + "/register", newUser);   
  }


  validateEmail(email: ValidateEmail)
  {
    return this.http.post<ValidateEmail>(this.authenticationUrl + "/validateEmail", email);   
  }

  //TO-DO
  // validate(newUser: NewUser)
  // {
  //   return this.http.post<User>(this.authenticationUrl + "/register", newUser);   
  // }


}
