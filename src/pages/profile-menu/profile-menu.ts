import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-menu',
  templateUrl: 'profile-menu.html',
})
export class ProfileMenuPage {

  constructor(
    public viewCtrl: ViewController,
    private navParams: NavParams
  ) {
    console.log(this.navParams.get('ev'));
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
