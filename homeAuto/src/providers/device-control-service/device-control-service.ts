import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
/*
  Generated class for the DeviceControlServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceControlService {

  _DeviceApiUrl = `http://localhost:27168/api/GetDeviceStatus?uid=1000027&pass=pass1234`;
  constructor(private _http: Http) {
    console.log('Hello DeviceControlServiceProvider Provider');
  }

  data: any;
  getDeviceStatus(): Observable<any>  {
   
      // already loaded data
      return  this._http.get(this._DeviceApiUrl)
             .map((res:Response) => res.json())
             .do(data => console.log(data));
    }

    // don't have the data yet  
}
