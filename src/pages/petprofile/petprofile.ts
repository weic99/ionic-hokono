import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-petprofile',
  templateUrl: 'petprofile.html',
})
export class PetprofilePage {

  pet: any /** switch to pet model later */

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) { }

  ionViewWillLoad() {
    this.pet = this.navParams.get('pet');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.viewCtrl.dismiss(this.pet);
  }
}
