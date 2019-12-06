import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  errorMsg: string;

  constructor(private loginService: LoginServiceService, private router: Router) { }

  /*signIn(){
    const username = this.username;
    this.loginService.signIn(username)
    .then(resolve => this.router.navigate(['chat']))
    .chat(error => this.errorMsg = error.message);
    
  }*/
}
