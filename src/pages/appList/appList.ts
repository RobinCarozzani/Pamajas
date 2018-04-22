import { Component } from '@angular/core';
import { Application } from '../../model/application';
import { ApplicationsService } from '../../services/applications.service';
import { NavController } from 'ionic-angular';
import { AppDetail } from '../appDetail/appDetail';
import { NewApp } from '../newApp/newApp';

@Component({
  selector: 'page-appList',
  templateUrl: 'appList.html'
})
export class AppList {
  public applications: Application[];

  constructor(
    private applicationsService: ApplicationsService,
    private navCtrl: NavController
  ) {}

  ionViewDidLoad() {
    this.applications = this.applicationsService.getAllApplications();
  }

  public openDetails(app: Application): void {
    this.navCtrl.push(AppDetail, {
      application: app
    });
  }

  public newApp(): void {
    this.navCtrl.push(NewApp);
  }
}
