import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Fact } from './shared/models/data';

@Injectable({
  providedIn: 'root'
})
export class HelpoJobService {
  headers: HttpHeaders;


  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Set-Cookie": this.cookieService.get('token')
    });
  }
  getRandomFact(): Observable<Fact[]> {
    const month = Math.floor(Math.random() * 11) + 1;
    let maxDay = 30;
    if (month === 2) {
      maxDay = 27;
    } else if ([4, 6, 9, 11].includes(month)) {
      maxDay = 29;
    }
    const day = Math.floor(Math.random() * maxDay) + 1;
    return this.httpClient.get<Fact[]>(`http://numbersapi.com/${month}/${day}/date?json`);
  }

  canCreateNewJob(): Observable<boolean> {
    
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
