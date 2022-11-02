import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {

  }
  goToLogin(){
this.sharedService.goToLogin();
  }
  goToLogin1(){
    alert("Password updated sucessfully");
    this.sharedService.goToLogin();
  }
  goToReset(){
this.sharedService.ResetPassword();
  }

}
