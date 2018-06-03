import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';

@Component({
    selector: 'page-DeviceControl-fancontrol',
    templateUrl: 'FanControl.html'
})
export class DeviceFanControlPage{
    deviceName : any;
    fanSpeed:number;
    blnSchedule:boolean=false;
    constructor(params: NavParams,public navCtrl: NavController,public alertCtrl:AlertController) {
       this.deviceName= params.get('deviceName');
    }
    goBack() {
         this.navCtrl.pop();
    }

    showAlert() {
        const alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
          buttons: ['OK']
        });
        alert.present();
      }

    newFunction(){
          console.log(this.blnSchedule);
      }

    saveConfiguration(){
        console.log(this.fanSpeed,this.blnSchedule);
      }
}