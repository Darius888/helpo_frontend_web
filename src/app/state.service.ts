import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private isLoggedInStatus = new Subject<boolean>();

  public loggedInStatus = this.isLoggedInStatus.asObservable();

  constructor() { }

  public loggedInCheck(isLoggedIn: boolean): void {
    // broadcasts the new data to every listener
    this.isLoggedInStatus.next(isLoggedIn);
  }
}
