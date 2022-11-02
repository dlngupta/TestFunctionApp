import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private router:Router) { }
  
  private header = new BehaviorSubject<object>({header1:null,header2:null,stepSize:0});
  headerData=this.header.asObservable();
  updateHeader(headerObj){
    this.header.next(headerObj);
  }
  goToLogin(){
    this.updateHeader({header1:"Home",header2:"Login",stepSize:1})
this.router.navigate(['/login']);
  }
  goToRegister(){
    this.updateHeader({header1:"Home",header2:"Register",stepSize:1})
    this.router.navigate(['/register']);
  }
  forgotPassword(){
    this.updateHeader({header1:"Home",header2:"Forgot Password",stepSize:1})
    this.router.navigate(['/forgot']);
  }
  ResetPassword(){
    this.updateHeader({header1:"Home",header2:"Reset Password",stepSize:1})
    this.router.navigate(['/reset']);
  }
  ResetSuccessfull(){
    this.updateHeader({header1:"Home",header2:"Reset Password Success",stepSize:1})
    this.router.navigate(['/reset-success']);
  }
  
    
  
}
