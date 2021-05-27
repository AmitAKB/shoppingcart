import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'shared/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthserviceService) { }

  login(){
    this.auth.login()
  }

}
