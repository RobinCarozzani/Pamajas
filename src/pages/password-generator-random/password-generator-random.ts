import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-password-generator-random',
  templateUrl: 'password-generator-random.html'
})
export class PasswordGeneratorRandomPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordGeneratorRandomPage');
  }
}
