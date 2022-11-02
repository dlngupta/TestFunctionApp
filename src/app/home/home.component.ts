import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private sharedService:SharedServiceService) { }

  ngOnInit(): void {
  }
  goToLogin(){
    this.sharedService.goToLogin();
  }
  goToRegister(){
    this.sharedService.goToRegister();
  }

}
