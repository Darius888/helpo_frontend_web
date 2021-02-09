import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: AuthService, private router: Router, private cookieService: CookieService, private loginStateService: StateService) { }

  ngOnInit(): void {
    this.logout();
  }

  //TO-DO CHECK IF LOGGED IN
  logout()
  {
    this.logoutService.logoutUser().subscribe(resp => console.log(resp.toString));
    this.loginStateService.loggedInCheck(false);

    setTimeout(() => {
      this.cookieService.delete('token','/users');
      this.router.navigate(['/feed']);
  }, 3000);  //3s
    console.log(localStorage.getItem('loggedIn'));
  }



}
