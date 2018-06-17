
import { NgModule, ErrorHandler ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//API Call Related
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { DeviceControlPage } from '../pages/DeviceControl/DeviceControl';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DeviceFanControlPage } from '../pages/DeviceControl/Fan/FanControl'
import { DevicePlugControlPage } from '../pages/DeviceControl/Plug/PlugControl'
import { DeviceLightControlPage } from '../pages/DeviceControl/Light/LightControl'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DeviceControlServiceProvider } from '../providers/device-control-service/device-control-service';
import { WeatherService } from './../providers/weather-service/weather.service';
import { DeviceDetailControlPage } from "../pages/DeviceControl/DeviceDetail/DeviceDetailControl"
//Third party UI

@NgModule({
  declarations: [
    MyApp,
    DeviceControlPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    DeviceFanControlPage,
    DevicePlugControlPage,
    DeviceLightControlPage,
    DeviceDetailControlPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DeviceControlPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    DeviceFanControlPage,
    DevicePlugControlPage,
    DeviceLightControlPage,
    DeviceDetailControlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DeviceControlServiceProvider,
    WeatherService
  ]
})
export class AppModule {}
