import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StateService } from './state.service';
import{ ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  //Conditional variable to either show elements in nav bar or not
  // condition = (localStorage.getItem('loggedIn') =="true");
  condition = (this.cookieService.get('loggedIn') =="true");

  constructor(private cookieService: CookieService, private loginStateService: StateService, private cdRef : ChangeDetectorRef)
  {
    
  }

  //TO-DO HAVE ICONS USED IN APP LOCALLY

  //TO-DO LOGOUT WHEN SESSION EXPIRES
  ngOnInit(): void {
    this.loginStateService.loggedInStatus.subscribe(isLoggedIn => {
      this.cookieService.set('loggedIn', String(isLoggedIn));
      // localStorage.setItem('loggedIn', String(isLoggedIn));
      
      // this.condition = (localStorage.getItem('loggedIn') =="true");
      this.condition = (this.cookieService.get('loggedIn') =="true");
      this.cdRef.detectChanges();     

  });

  }

}
