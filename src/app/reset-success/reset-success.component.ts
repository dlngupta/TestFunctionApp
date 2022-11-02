import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-reset-success',
  templateUrl: './reset-success.component.html',
  styleUrls: ['./reset-success.component.css']
})
export class ResetSuccessComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {
  }
  goToLogin(){
this.sharedService.goToLogin();
  }

}
