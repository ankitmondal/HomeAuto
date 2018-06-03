import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
    selector: 'page-DeviceControl-lightcontrol',
    templateUrl: 'LightControl.html'
})
export class DeviceLightControlPage{
    deviceName : any;
    blnSchedule:boolean=false;
    blnLDR:boolean=false;
    blnPIR:boolean=false;
    constructor(params: NavParams,public navCtrl: NavController) {
       this.deviceName= params.get('deviceName');
    }
    goBack() {
         this.navCtrl.pop();
    }

    saveConfiguration(){
        console.log(this.blnSchedule);
    }
}