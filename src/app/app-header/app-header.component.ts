import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
header1:string="";
header2:string="";
stepSize:number=0;
  constructor(private sharedService:SharedServiceService) { 
    this.sharedService.headerData.subscribe(data=>{
      let value:any=data;
      this.header1=value.header1;
      this.header2=value.header2;
      this.stepSize=value.stepSize;

    })
  }

  ngOnInit(): void {
  }
  

}
