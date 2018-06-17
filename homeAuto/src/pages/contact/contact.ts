import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  blnLocationUpdate:boolean;
  blnCredentialUpdate:boolean;

  pinCode:string="";
  password:string="";
  confirmPassword:string="";

  constructor(public navCtrl: NavController) {

  }
  UpdatePassword(){
    console.log(this.password + "" + this.confirmPassword);
  }

  updatePinCode(){
    console.log(this.pinCode);
  }
}
