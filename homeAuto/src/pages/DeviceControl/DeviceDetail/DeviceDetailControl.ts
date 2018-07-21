import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeviceFanControlPage } from '../Fan/FanControl'
import { DevicePlugControlPage } from '../Plug/PlugControl'
import { DeviceLightControlPage } from '../Light/LightControl'
import { DeviceControlService } from '../../../providers/device-control-service/device-control-service';
@Component({
  selector: 'page-device-detail',
  templateUrl: 'DeviceDetailControl.html'
})
export class DeviceDetailControlPage {
  @Input() room;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                            public serviceProvider: DeviceControlService) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashBoardPage');
  }

  goToFanDetails(fanName: any) {
    this.navCtrl.push(DeviceFanControlPage, { deviceName: fanName, RoomKey:this.room.RoomKey });
  }

  goToPlugDetails(plugName: any) {
    this.navCtrl.push(DevicePlugControlPage, { deviceName: plugName, RoomKey:this.room.RoomKey });
  }

  goToLightDetails(lightName: any) {
    this.navCtrl.push(DeviceLightControlPage, { deviceName: lightName , RoomKey:this.room.RoomKey});
  }

  updateDeviceState(item:any,deviceType:string){
    console.log(item);
    var lightObj={item,"RoomKey":this.room.RoomKey,"Device":deviceType};
    console.log(lightObj);
  } 
}
