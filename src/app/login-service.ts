import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticationUrl = 'http://localhost:8080/users/authenticate';

  constructor(private http: HttpClient) { }

  login(user: User){
    console.log("AAA");
    return this.http.post<User>(this.authenticationUrl, user);   
  }

}
