import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  profile: any;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) { }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.viewCtrl.dismiss(this.profile);
  }

}
