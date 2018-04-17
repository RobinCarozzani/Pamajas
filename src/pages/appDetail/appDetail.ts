import { Component } from '@angular/core';
import { Application } from '../../model/application';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-appDetail',
  templateUrl: 'appDetail.html'
})
export class AppDetail {
  public currentApplication: Application;

  constructor(private navParams: NavParams) {}

  ionViewDidLoad() {
    this.currentApplication = this.navParams.get('application');
  }
}
