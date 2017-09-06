import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

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
  service = new google.maps.places.AutocompleteService();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private zone: NgZone
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

  updateSearch() {
    if (this.addressQuery == '') {
      this.addresses = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({
      input: this.addressQuery,
      componentRestrictions: {country: 'US'}
    }, function (predictions, status) {
      me.addresses = [];
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          me.addresses.push(prediction.description);
        });
      });
    });
  }
}
