import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {
  }
  goToResetSuccessfull(){
    this.sharedService.ResetSuccessfull();
  }

}
