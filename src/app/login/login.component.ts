import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService)
  {

  }

  ngOnInit(): void {
  }

  title = 'helpo';

  userEmail = '';
  password = '';

  existingUser: User = new User;

 

  userLogin(): void {
      this.existingUser.userEmail = this.userEmail;
      this.existingUser.password = this.password;
      console.log("VERTE", this.userEmail);
      this.loginService.login(this.existingUser).subscribe();
  }

}
