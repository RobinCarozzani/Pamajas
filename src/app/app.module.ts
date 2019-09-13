import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CryptoService } from '../services/crypto.service';
import { AppList } from '../pages/appList/appList';
import { ApplicationsService } from '../services/applications.service';
import { AppDetail } from '../pages/appDetail/appDetail';
import { NewApp } from '../pages/newApp/newApp';
import { PasswordGeneratorPage } from '../pages/password-generator/password-generator';
import { PasswordGeneratorRandomPage } from '../pages/password-generator-random/password-generator-random';
import { PasswordGeneratorDefinePage } from '../pages/password-generator-define/password-generator-define';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AppList,
    AppDetail,
    NewApp,
    PasswordGeneratorPage,
    PasswordGeneratorRandomPage,
    PasswordGeneratorDefinePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AppList,
    AppDetail,
    NewApp,
    PasswordGeneratorPage,
    PasswordGeneratorRandomPage,
    PasswordGeneratorDefinePage
  ],
  providers: [
    ApplicationsService,
    CryptoService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
