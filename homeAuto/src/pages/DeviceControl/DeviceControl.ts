import { Component } from '@angular/core';
import { DeviceControlServiceProvider } from '../../providers/device-control-service/device-control-service';
@Component({
  selector: 'page-DeviceControl',
  templateUrl: 'DeviceControl.html'
})
export class DeviceControlPage {
  segments = [{ "key": "bed", "value": "Bedroom" },
  { "key": "dine", "value": "Dining" },
  { "key": "kitchen", "value": "Kitchen" }];

  room: string = "bed";

  plugs = [{ "Name": "Bed Room Plug 1", "State": "true" },
  { "Name": "Plug 2", "State": "false" }];

  fans = [{ "Name": "Bed Room Fan 1", "State": "true" },
  { "Name": "Fan 2", "State": "false" }];

  lights = [{ "Name": "Bed Room light 1", "State": "true" },
  { "Name": "light 2", "State": "false" }];
  roomDetail = { "Plugs": this.plugs, "Fans": this.fans, "Lights": this.lights };
  constructor(public serviceProvider: DeviceControlServiceProvider) {
  }
  onClick() {
    console.log(this.room);
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
    this.roomDetail = { "Plugs": this.plugs, "Fans": this.fans, "Lights": this.lights };
  }
}
