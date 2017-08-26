import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { UserProvider } from '../../providers/user/user';

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
    public appCtrl: App,
    private User: UserProvider,
    private afAuth: AngularFireAuth,
    private platform: Platform
  ) {
    this.account = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  doLogin(str?: string) {
    //console.log(str);

    if (str === 'google') {
      this.User.googleSignIn()
        .then(() => this.appCtrl.getRootNav().setRoot(TabsPage))
        .catch(() => console.log('failed to log in'));
    }
  }

  doSignUp() {
    this.navCtrl.setRoot('SignupPage');
  }
}
