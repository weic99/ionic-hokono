import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { Autostart } from '@ionic-native/autostart';

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
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private autostart: Autostart
  ) {
    this.autostart.enable();
    this.presentLoading();

    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        // console.log('Not logged in');
      } else {
        this.rootPage = TabsPage;
        this.loader.dismiss();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
    });
    this.loader.present();
  }
}
