import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

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
    public navParams: NavParams,
    private firebase: FirebaseProvider,
    public toastCtrl: ToastController
  ) {
    this.account = {...this.navParams.get('account')};
    //console.log('SelectAccountTypePage', this.account);
  }

  next() {
    /** Create the profile with account info */
    this.firebase.updateProfile(this.account)
      .then(() => {
        this.toastCtrl.create({
          message: 'Welcome to Hokono',
          duration: 2000,
          cssClass: 'toast-success',
          position: 'top'
        }).present();
      })
      .catch(() => {
        this.toastCtrl.create({
          message: 'Something Went Wrong',
          duration: 2000,
          cssClass: 'toast-fail'
        }).present();
      });
  }

  back() {
    this.navCtrl.pop({
      animation: 'transition',
      duration: 300
    });
  }
}
