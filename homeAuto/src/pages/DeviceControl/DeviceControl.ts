import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceControlServiceProvider } from '../../providers/device-control-service/device-control-service';
import { DeviceFanControlPage } from './Fan/FanControl'
@Component({
  selector: 'page-DeviceControl',
  templateUrl: 'DeviceControl.html'
})
export class DeviceControlPage {
  plugs = [{"Name":"Plug 1","State":"true"},
                 {"Name":"Plug 2","State":"false"}];

  fans =  [{"Name":"Fan 1","State":"true"},
                {"Name":"Fan 2","State":"false"}];

  lights =  [{"Name":"light 1","State":"true"},
                {"Name":"light 2","State":"false"}];
  room:string="bed";
  
    constructor(public navCtrl: NavController,public navParams: NavParams, public deviceAPI: DeviceControlServiceProvider) {
    //this.getDeviceStatus();
  }
  
   getDeviceStatus() {
      this.deviceAPI.getDeviceStatus()
      .then(data => {
        this.deviceStatus = data;
        console.log(JSON.stringify(data));
      });
    }
  deviceStatus: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashBoardPage');
  }
  
  goToFanDetails(){
    this.navCtrl.push(DeviceFanControlPage);
  }
}
