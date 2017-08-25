import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-petprofile',
  templateUrl: 'petprofile.html',
})
export class PetprofilePage {

  pet: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewWillLoad() {
    this.pet = this.navParams.get('pet');

    /** Guarantee data is sent */
    if (!this.pet) {
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PetprofilePage');
  }

}
