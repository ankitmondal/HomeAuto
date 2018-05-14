import { Component } from '@angular/core';

import { DeviceControlPage } from '../DeviceControl/DeviceControl';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DeviceControlPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
