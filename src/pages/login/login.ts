import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

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
    // public appCtrl: App,
    private User: UserProvider,
    private toastCtrl: ToastController
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
        // .then((res) => {
        //   // this.storage.set('user', JSON.stringify(res));
        //   this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
        // })
        .catch((err) => {
          console.log('err', err);
          this.toastCtrl.create({
            message: err.message,
            duration: 2000,
            cssClass: 'toast-fail'
          }).present();
        });
    } else if (str === 'facebook') {
      this.User.facebookSignIn()
        .catch((err) => {
          console.log('err', err);
          this.toastCtrl.create({
            message: err.message,
            duration: 2000,
            cssClass: 'toast-fail'
          }).present();
        });
    } else if (str === 'email') {
      this.User.signInWithEmailAndPassword(this.account.email, this.account.password)
        .catch((err) => {
          console.log('err', err);
          this.toastCtrl.create({
            message: err.message,
            duration: 2000,
            cssClass: 'toast-fail'
          }).present();
        });
    }
  }

  doSignUp() {
    this.navCtrl.setRoot('SignupPage');
  }
}
