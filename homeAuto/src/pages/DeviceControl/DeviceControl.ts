import { Component, OnInit } from '@angular/core';
import { DeviceControlService } from '../../providers/device-control-service/device-control-service';
@Component({
  selector: 'page-DeviceControl',
  templateUrl: 'DeviceControl.html'
})
export class DeviceControlPage implements OnInit {
  segments = [{ "key": "Bed", "value": "Bedroom" },
  { "key": "Dine", "value": "Dining" },
  { "key": "Kitchen", "value": "Kitchen" }];
  room: string = "bed";
  roomDetail :any;
  deviceStatus: any;
  constructor(public devserviceProvider: DeviceControlService) {
  }
  
  ngOnInit() {
    this.getDeviceStatus();
  }

  getDeviceStatus() {
    this.devserviceProvider.getDeviceStatus()
      .subscribe((data: any) => {
        this.deviceStatus = data[0];
        console.log(this.deviceStatus);
        //this.segments = this.deviceStatus.Rooms;
        // this.deviceStatus.Rooms.forEach(element => {
        //   this.segments.push({ "key": element.RoomName, "value": element.RoomName})
        // });
      
        this.roomDetail = {
          "Plugs": this.deviceStatus.Rooms[0].Devices[0].Plug,
          "Fans": this.deviceStatus.Rooms[0].Devices[0].Fan,
          "Lights": this.deviceStatus.Rooms[0].Devices[0].Light, "RoomKey": this.room
        };
      });
  }
  
  onClick() {
    console.log(this.room);
    this.deviceStatus.Rooms.forEach(rm => {
      if (rm.RoomName == this.room) {
        this.roomDetail = {
          "Plugs": rm.Devices[0].Plug,"Fans": rm.Devices[0].Fan, 
          "Lights": rm.Devices[0].Light, "RoomKey": this.room 
        };
      }
    });
  }

}
