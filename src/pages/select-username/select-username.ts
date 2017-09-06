import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-username',
  templateUrl: 'select-username.html',
})
export class SelectUsernamePage {

  account: {
    accType: string,
    address: string,
    displayName: string,
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.account = {...this.navParams.get('account')};
    //console.log('SelectAccountTypePage', this.account);
  }

  next() {
    /** Create the profile with account info */

  }

  back() {
    this.navCtrl.pop({
      animation: 'transition',
      duration: 300
    });
  }
}
