import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: {
    email: string,
    password: string
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private platform: Platform
  ) {
    this.account = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(str?: string) {
    console.log(str);

    if(str === 'google') {
      if (this.platform.is('cordova')) {

      } else {
        // web sign in, will not work
        return this.afAuth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          console.log(res);
          this.navCtrl.setRoot(TabsPage);
        })
        .catch(err => {
          console.log('login(google)', err);
        });
      }
    }
  }

  doSignUp() {
    this.navCtrl.setRoot('SignupPage');
  }
}
