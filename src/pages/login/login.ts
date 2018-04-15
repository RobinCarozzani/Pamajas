import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { CryptoService } from '../../services/crypto.service';
import { AppList } from '../appList/appList';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public inMasterPwd: string;
  public showError = false;

  constructor(
    private alertCtrl: AlertController,
    private cryptoService: CryptoService,
    private navCtrl: NavController
  ) {}

  public login(): void {
    if (this.cryptoService.checkPassword(this.inMasterPwd)) {
      this.cryptoService.setCurrentMasterPassword(this.inMasterPwd);
      this.navCtrl.setRoot(AppList);
    } else {
      const alert = this.alertCtrl.create({
        subTitle: 'Mot de passe incorrect',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
