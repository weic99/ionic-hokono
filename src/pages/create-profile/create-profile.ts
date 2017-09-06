import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) { }

  logout() {
    this.afAuth.auth.signOut();
  }

}
