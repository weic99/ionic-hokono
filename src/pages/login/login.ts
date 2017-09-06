import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

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
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public appCtrl: App,
    private User: UserProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
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
    this.presentLoading();

    if (str === 'google') {
      this.User.googleSignIn()
        .then(() => this.loader.dismiss())
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
        .then(() => this.loader.dismiss())
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
        .then(() => this.loader.dismiss())
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

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
    });
    this.loader.present();
  }
}
