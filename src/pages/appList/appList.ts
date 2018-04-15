import { Component } from '@angular/core';
import { Application } from '../../model/application';

@Component({
  selector: 'page-appList',
  templateUrl: 'appList.html'
})
export class AppList {
  public applications: Application[];

  constructor() {}

  ionViewDidLoad() {
    this.applications = [];
  }
}
