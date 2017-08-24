import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public navParams: NavParams
  ) {
    this.account = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {

  }
}
