import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  account: {
    accType: string,
    address: string,
    displayName: string,
  }

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) { }

  logout() {
    this.afAuth.auth.signOut();
  }

  start() {
    this.navCtrl.push('SelectAccountTypePage', {account: this.account}, {
      animation: 'transition',
      duration: 300
    });
  }

}
