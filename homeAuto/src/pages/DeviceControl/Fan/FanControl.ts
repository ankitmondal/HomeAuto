import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
    selector: 'page-DeviceControl-fancontrol',
    templateUrl: 'FanControl.html'
})
export class DeviceFanControlPage{
    deviceName : any;
    fanSpeed:number;
    
    constructor(params: NavParams,public navCtrl: NavController) {
       this.deviceName= params.get('deviceName');
    }
    goBack() {
         this.navCtrl.pop();
    }
}