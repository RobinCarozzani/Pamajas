import { Component } from '@angular/core';
import { Application } from '../../model/application';
import { NavController, NavParams } from 'ionic-angular';
import { CryptoService } from '../../services/crypto.service';
import { NewApp } from '../newApp/newApp';

@Component({
  selector: 'page-appDetail',
  templateUrl: 'appDetail.html'
})
export class AppDetail {
  public currentApplication: Application;
  public displayedPassword: string = '*****';
  public passwordIsVisible: boolean = false;

  constructor(
    private cryptoService: CryptoService,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.currentApplication = this.navParams.get('application');
  }

  public tooglePasswordVisibility(): void {
    if (!this.passwordIsVisible) {
      this.displayedPassword = this.cryptoService.decypher(
        this.currentApplication.credentials
      );
    } else {
      this.displayedPassword = '*****';
    }
    this.passwordIsVisible = !this.passwordIsVisible;
  }

  public edit(): void {
    this.navCtrl.push(NewApp, { application: this.currentApplication });
  }
}
