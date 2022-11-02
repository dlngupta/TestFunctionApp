import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {
  }
  goToRegister(){
    this.sharedService.goToRegister();
  }
  goToForgot(){
    this.sharedService.forgotPassword();
  }

}
