import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';


import { Camera } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    PhotoLibrary
  ]
})
export class AppModule {}
