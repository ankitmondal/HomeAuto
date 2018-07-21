import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceControlService } from '../../../providers/device-control-service/device-control-service';
import { Time } from '@angular/common';
@Component({
    selector: 'page-DeviceControl-lightcontrol',
    templateUrl: 'LightControl.html'
})
export class DeviceLightControlPage{
    deviceName : any;
    blnSchedule:boolean=false;
    blnLDR:boolean=false;
    blnPIR:boolean=false;
    RoomKey:string;
    onTime:Time;
    offTime:Time;
    constructor(params: NavParams,public navCtrl: NavController,public _service:DeviceControlService) {
       this.deviceName= params.get('deviceName');
       this.RoomKey= params.get('RoomKey');
    }
    goBack() {
         this.navCtrl.pop();
    }

    saveConfiguration(){
        console.log(this.blnSchedule);
    }
}