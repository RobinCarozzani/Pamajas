import { Component } from '@angular/core';
import { Application } from '../../model/application';
import { NavParams } from 'ionic-angular';
import { Credentials } from '../../model/credentials';

@Component({
  selector: 'page-newApp',
  templateUrl: 'newApp.html'
})
export class NewApp {
  public application: Application;
  public editionMode: boolean;

  constructor(private navParams: NavParams) {}

  ionViewDidLoad() {
    const appFromNav: Application = this.navParams.get('application');
    if (appFromNav != null) {
      this.application = appFromNav;
      this.editionMode = true;
    } else {
      this.application = new Application();
      this.application.credentials = new Credentials();
      this.editionMode = false;
    }
  }
}
