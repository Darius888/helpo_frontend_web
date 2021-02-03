import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  token : string = '';

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
    console.log(this.token);
  }

}
