import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
