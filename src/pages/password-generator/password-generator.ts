import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PasswordGeneratorRandomPage } from '../password-generator-random/password-generator-random';
import { PasswordGeneratorDefinePage } from '../password-generator-define/password-generator-define';

@Component({
  selector: 'page-password-generator',
  templateUrl: 'password-generator.html'
})
export class PasswordGeneratorPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  randomRoot = PasswordGeneratorRandomPage;
  defineRoot = PasswordGeneratorDefinePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordGeneratorPage');
  }
}
