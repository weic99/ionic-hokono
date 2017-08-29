import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pet-profile-edit',
  templateUrl: 'pet-profile-edit.html',
})
export class PetProfileEditPage {

  pet: any /** switch to pet model later */

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) { }

  ionViewWillLoad() {
    this.pet = this.navParams.get('pet');
  }

  doOpenPhotoMenu() {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.viewCtrl.dismiss(this.pet);
  }
}
