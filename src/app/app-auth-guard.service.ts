import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuardService implements CanActivate{
  headers: HttpHeaders;

  

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Set-Cookie": this.cookieService.get('token')
  });
  
   }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.httpClient.get('http://localhost:8080/users/validate', {headers: this.headers, withCredentials: true}).pipe(
      map(res => {
        if(res === true)
        {
          return true;
        } else {
          return false;
        }
      }),
      catchError((err) => {
        return of(false);
      })
    );

  }


}
