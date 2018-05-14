import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
    selector: 'page-DeviceControl-fancontrol',
    templateUrl: 'FanControl.html'
})
export class DeviceFanControlPage{
    constructor(public navCtrl: NavController) {}
    goBack() {
        this.navCtrl.pop();
      }
}