import { Component } from '@angular/core';
import { Application } from '../../model/application';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'page-appList',
  templateUrl: 'appList.html'
})
export class AppList {
  public applications: Application[];

  constructor(private applicationsService: ApplicationsService) {}

  ionViewDidLoad() {
    this.applications = this.applicationsService.getAllApplications();
  }
}
