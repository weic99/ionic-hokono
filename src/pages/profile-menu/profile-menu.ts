import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-menu',
  templateUrl: 'profile-menu.html',
})
export class ProfileMenuPage {

  constructor(
    public viewCtrl: ViewController
  ) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
