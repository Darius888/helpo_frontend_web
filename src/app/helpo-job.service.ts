import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fact } from './shared/models/data';

@Injectable({
  providedIn: 'root'
})
export class HelpoJobService {

  constructor(private http: HttpClient) { }
  getRandomFact(): Observable<Fact[]> {
    const month = Math.floor(Math.random() * 11) + 1;
    let maxDay = 30;
    if (month === 2) {
      maxDay = 27;
    } else if ([4, 6, 9, 11].includes(month)) {
      maxDay = 29;
    }
    const day = Math.floor(Math.random() * maxDay) + 1;
    return this.http.get<Fact[]>(`http://numbersapi.com/${month}/${day}/date?json`);
  }
}
