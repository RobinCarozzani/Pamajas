import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordGeneratorDefinePage } from './password-generator-define';

@NgModule({
  declarations: [
    PasswordGeneratorDefinePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordGeneratorDefinePage),
  ],
})
export class PasswordGeneratorDefinePageModule {}
