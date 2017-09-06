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

  showAutoComplete: boolean = false;

  /** Google api autocomplete */
  addresses: string[];
  addressQuery: string; /** query for to search */

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.account = {...this.navParams.get('account')};
    //console.log('SelectAccountTypePage', this.account);
  }

  next() {
    this.navCtrl.push('SelectUsernamePage', {account: this.account}, {
      animation: 'transition',
      duration: 300
    });
  }

  back() {
    this.navCtrl.pop({
      animation: 'transition',
      duration: 300
    });
  }

  selectAddress(address: string) {
    this.addressQuery = address;
    this.account.address = address;
  }

  toggleShowAutoComplete() {
    setTimeout(() => {
      this.showAutoComplete = !this.showAutoComplete;
    }, 300);
  }
}
