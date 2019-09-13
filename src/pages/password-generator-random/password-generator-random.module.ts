import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordGeneratorRandomPage } from './password-generator-random';

@NgModule({
  declarations: [
    PasswordGeneratorRandomPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordGeneratorRandomPage),
  ],
})
export class PasswordGeneratorRandomPageModule {}
