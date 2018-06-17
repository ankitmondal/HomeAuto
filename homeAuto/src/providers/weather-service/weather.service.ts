import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class WeatherService {
  pinCode:number=743355;
  apiKey:string="4eacf03305c7117e4b44b22ca2a80dc4";
  _weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`+this.pinCode +`,IN&appid=`+ this.apiKey;
  weatherData:any;
  constructor(private _http: Http) { }

  getWeatherReport(): Observable<any> {
     return  this._http.get(this._weatherApiUrl)
             .map((res:Response) => res.json())
             .do(data => console.log(JSON.stringify(data)));
    }
}