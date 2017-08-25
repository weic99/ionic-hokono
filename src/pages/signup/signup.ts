import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public navParams: NavParams
  ) {
    this.account = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SignupPage');
  }

  doLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

  doSignUp() {
    console.log(this.account);

  }
}
