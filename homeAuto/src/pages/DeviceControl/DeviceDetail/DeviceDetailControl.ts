import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeviceFanControlPage } from '../Fan/FanControl'
import { DevicePlugControlPage } from '../Plug/PlugControl'
import { DeviceLightControlPage } from '../Light/LightControl'
@Component({
  selector: 'page-device-detail',
  templateUrl: 'DeviceDetailControl.html'
})
export class DeviceDetailControlPage {
  @Input() room;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashBoardPage');
  }

  goToFanDetails(fanName: any) {
    this.navCtrl.push(DeviceFanControlPage, { deviceName: fanName });
  }

  goToPlugDetails(plugName: any) {
    this.navCtrl.push(DevicePlugControlPage, { deviceName: plugName });
  }

  goToLightDetails(lightName: any) {
    this.navCtrl.push(DeviceLightControlPage, { deviceName: lightName });
  }
}
