import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {
  }
  goToLogin(){
    this.sharedService.goToLogin();
      }
      goToLogin1(){
        alert("User Registered successfully ");
        this.sharedService.goToLogin();
      }

}
