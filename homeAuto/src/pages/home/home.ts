import { WeatherService } from './../../providers/weather-service/weather.service';
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,public serviceProvider:WeatherService) {
  }

  Clock:string;
  dsb_Total:string;
  dsb_On:string;
  weather:any;

  ngOnInit() {
    let timeoutId = setInterval(() => {   
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    this.Clock=this.pad_time(hours) + ":" + this.pad_time(minutes) + ":" + this.pad_time(seconds);
    this.dsb_Total="0";
    this.dsb_On="0";
    }, 1000);    
    this.getWeatherDetails();
  }

  pad_time(val) {
    if (val < 10) {val = "0" + val};  // add zero in front of numbers < 10
    return val;
  }

  today:number =Date.now();

  getWeatherDetails() {
    this.serviceProvider
        .getWeatherReport()
        .subscribe(data=> this.weather=data);
  }

}
