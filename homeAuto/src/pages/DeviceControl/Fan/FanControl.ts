import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';
import { DeviceControlService } from '../../../providers/device-control-service/device-control-service';
import { Time } from '@angular/common';
@Component({
    selector: 'page-DeviceControl-fancontrol',
    templateUrl: 'FanControl.html'
})
export class DeviceFanControlPage{
    deviceName : any;
    fanSpeed:number;
    blnSchedule:boolean=false;
    RoomKey:string;
    onTime:Time;
    offTime:Time;
    constructor(params: NavParams,public navCtrl: NavController,public alertCtrl:AlertController
      ,public _service:DeviceControlService ) {
       this.deviceName= params.get('deviceName');
       this.RoomKey= params.get('RoomKey');
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