import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-account-type',
  templateUrl: 'select-account-type.html',
})
export class SelectAccountTypePage {

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
    console.log('SelectAccountTypePage', this.account);
  }

  next() {

  }

  back() {
    this.navCtrl.pop({
      animation: 'transition',
      duration: 300
    });
  }
}
