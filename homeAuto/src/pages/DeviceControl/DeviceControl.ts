import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { DeviceControlService} from '../../providers/device-control-service/device-control-service';
>>>>>>> fc0d9d65dac85fcfb864a519441ec46b831ec8a4
@Component({
  selector: 'page-DeviceControl',
  templateUrl: 'DeviceControl.html'
})
export class DeviceControlPage {
  // segments = [{ "key": "bed", "value": "Bedroom" },
  // { "key": "dine", "value": "Dining" },
  // { "key": "kitchen", "value": "Kitchen" }];
  segments : any;
  room: string = "bed";

  plugs = [{ "Name": "Bed Room Plug 1", "State": "true" },
  { "Name": "Plug 2", "State": "false" }];

  fans = [{ "Name": "Bed Room Fan 1", "State": "true" },
  { "Name": "Fan 2", "State": "false" }];

  lights = [{ "Name": "Bed Room light 1", "State": "true" },
  { "Name": "light 2", "State": "false" }];
  roomDetail = { "Plugs": this.plugs, "Fans": this.fans, "Lights": this.lights,"RoomKey":this.room };
  constructor() {
    this.getDeviceStatus();
    this.devserviceProvider.getDeviceStatus()
    .subscribe(data=> this.deviceStatus=JSON.parse(data)[0]);
      
     console.log(this.deviceStatus);
     this.segments = this.deviceStatus.Rooms;
     this.room = this.deviceStatus.Rooms[0].RoomName;
     this.roomDetail={ "Plugs": this.deviceStatus.Rooms[0].Devices[0].Plug, "Fans": this.deviceStatus.Rooms[0].Devices[0].Fan, "Lights": this.deviceStatus.Rooms[0].Devices[0].Light };
      // this.fans = this.deviceStatus.filter((item)=> {return item.devicetype == "Fan"});
      // this.lights = this.deviceStatus.filter((item)=> {return item.devicetype == "Light"});
      // this.plugs = this.deviceStatus.filter((item)=> {return item.devicetype == "Plug"});
    //console.log(this.fans);
    
>>>>>>> fc0d9d65dac85fcfb864a519441ec46b831ec8a4
  }

  onClick() {
    this.deviceStatus.Rooms.forEach(rm => {
      if(rm.RoomName === this.room)
      {
        this.roomDetail={ "Plugs": rm.Devices[0].Plug, "Fans": rm.Devices[0].Fan, "Lights": rm.Devices[0].Light };
      }
      
    });
    //console.log(this.room);
<<<<<<< HEAD
    if (this.room === "bed") {
      this.plugs = [{ "Name": "Bed room Plug 1", "State": "true" },
      { "Name": "Plug 2", "State": "false" }];

      this.fans = [{ "Name": "Fan 1", "State": "true" },
      { "Name": "Fan 2", "State": "false" }];

      this.lights = [{ "Name": "light 1", "State": "true" },
      { "Name": "light 2", "State": "false" }];
    }
    if (this.room === "dine") {
      this.plugs = [{ "Name": "dining room Plug 1", "State": "true" },
      { "Name": "Plug 2", "State": "false" }];

      this.fans = [{ "Name": "Fan 1", "State": "true" },
      { "Name": "Fan 2", "State": "false" }];

      this.lights = [{ "Name": "light 1", "State": "true" },
      { "Name": "light 2", "State": "false" }];
    }
    if (this.room === "kitchen") {
      this.plugs = [{ "Name": "kitchen Plug 1", "State": "true" },
      { "Name": "Plug 2", "State": "false" }];

      this.fans = [{ "Name": "Fan 1", "State": "true" },
      { "Name": "Fan 2", "State": "false" }];

      this.lights = [{ "Name": "light 1", "State": "true" },
      { "Name": "light 2", "State": "false" }];
    }
    this.roomDetail = { "Plugs": this.plugs, "Fans": this.fans, "Lights": this.lights, "RoomKey": this.room};
=======
    // if (this.room === "bed") {
    //   this.plugs = [{ "Name": "Bed room Plug 1", "State": "true" },
    //   { "Name": "Plug 2", "State": "false" }];

    //   this.fans = [{ "Name": "Fan 1", "State": "true" },
    //   { "Name": "Fan 2", "State": "false" }];

    //   this.lights = [{ "Name": "light 1", "State": "true" },
    //   { "Name": "light 2", "State": "false" }];
    // }
    // if (this.room === "dine") {
    //   this.plugs = [{ "Name": "dining room Plug 1", "State": "true" },
    //   { "Name": "Plug 2", "State": "false" }];

    //   this.fans = [{ "Name": "Fan 1", "State": "true" },
    //   { "Name": "Fan 2", "State": "false" }];

    //   this.lights = [{ "Name": "light 1", "State": "true" },
    //   { "Name": "light 2", "State": "false" }];
    // }
    // if (this.room === "kitchen") {
    //   this.plugs = [{ "Name": "kitchen Plug 1", "State": "true" },
    //   { "Name": "Plug 2", "State": "false" }];

    //   this.fans = [{ "Name": "Fan 1", "State": "true" },
    //   { "Name": "Fan 2", "State": "false" }];

    //   this.lights = [{ "Name": "light 1", "State": "true" },
    //   { "Name": "light 2", "State": "false" }];
    // }
    // this.roomDetail = { "Plugs": this.plugs, "Fans": this.fans, "Lights": this.lights };
>>>>>>> fc0d9d65dac85fcfb864a519441ec46b831ec8a4
  }
}
