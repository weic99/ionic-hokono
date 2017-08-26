import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-petprofile',
  templateUrl: 'petprofile.html',
})
export class PetprofilePage {

  pet: any;
  cardItems: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.pet = this.navParams.get('pet') || {};
  }

  ionViewWillEnter() {
     /** Guarantee data is sent */
    if (!Object.keys(this.pet).length) {
      this.navCtrl.setRoot('ProfilePage');
    }
  }
}
