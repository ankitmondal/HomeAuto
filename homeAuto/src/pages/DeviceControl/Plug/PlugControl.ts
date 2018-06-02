import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
    selector: 'page-DeviceControl-plugcontrol',
    templateUrl: 'PlugControl.html'
})
export class DevicePlugControlPage{
    deviceName : any;
    fanSpeed:number;
    
    constructor(params: NavParams,public navCtrl: NavController) {
       this.deviceName= params.get('deviceName');
    }
    goBack() {
        
         this.navCtrl.pop();
    }
}