import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  AlertController,
  Alert
} from 'ionic-angular';
import { GeneratorOptions } from '../../model/generatorOptions';

export enum CustomListType {
  additional = 1,
  excluded
}

@Component({
  selector: 'page-password-generator-random',
  templateUrl: 'password-generator-random.html'
})
export class PasswordGeneratorRandomPage {
  public alphabetMode: string;
  public generatorOptions: GeneratorOptions;
  public customListTypes = CustomListType;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.alphabetMode = 'simple';
    this.generatorOptions = {
      lowerCase: true,
      upperCase: true,
      numbers: true,
      special: true,
      excluded: [],
      additional: [],
      length: 21
    };
  }

  public showSpecialCharsList(): void {
    const alert: Alert = this.alertCtrl.create({
      title: 'Caractères spéciaux',
      subTitle: '&éèçà#@!;,:~^ùµ§|`-?.$%=(){}[]*/+\\<>',
      buttons: ['OK']
    });
    alert.present();
  }

  public showCustomList(type: CustomListType): void {
    let defaultValue: string;
    switch (type) {
      case CustomListType.additional:
        defaultValue = this.generatorOptions.additional.join('');
        break;
      case CustomListType.excluded:
        defaultValue = this.generatorOptions.excluded.join('');
        break;
      default:
        defaultValue = '';
        break;
    }
    const prompt: Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'list',
          type: 'text',
          value: defaultValue
        }
      ],
      buttons: [
        {
          text: 'Annuler'
        },
        {
          text: 'OK',
          handler: data => {
            if (data.list.length > 0) {
              let listAsArray: string[] = [];
              for (var i: number = 0; i < data.list.length; ++i) {
                listAsArray.push(data.list.charAt(i));
              }
              if (type === CustomListType.additional) {
                this.generatorOptions.additional = listAsArray.slice();
              } else if (type === CustomListType.excluded) {
                this.generatorOptions.excluded = listAsArray.slice();
              }
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
