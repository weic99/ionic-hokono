import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';
  loader: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private loadingCtrl: LoadingController
  ) {
    this.presentLoading();

    if (platform.is('cordova')) {
      this.rootPage = 'LoginPage';
    } else if (platform.is('mobileweb')) {
      this.rootPage = TabsPage;
    }

    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
      duration: 1000
    });
    this.loader.present();
  }
}
