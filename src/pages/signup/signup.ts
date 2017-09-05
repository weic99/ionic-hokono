import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  account: {
    email: string,
    password: string
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private user: UserProvider,
    private toastCtrl: ToastController
  ) {
    this.account = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
  }

  doLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

  doSignUp() {
    this.user.createUserWithEmailAndPassword(this.account.email, this.account.password)
      .then(() => this.user.signInWithEmailAndPassword(this.account.email, this.account.password))
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
