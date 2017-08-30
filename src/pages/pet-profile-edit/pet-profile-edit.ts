import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ModalController } from 'ionic-angular';

import { Pet } from '../../models/pet';

@IonicPage()
@Component({
  selector: 'page-pet-profile-edit',
  templateUrl: 'pet-profile-edit.html',
})
export class PetProfileEditPage {

  pet = {} as Pet /** switch to pet model later */

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ionViewWillLoad() {
    let petProfile = this.navParams.get('pet');

    if (petProfile === undefined) {
      this.navCtrl.setRoot('ProfilePage');
    } else {
      this.pet = { ...this.pet, ...petProfile }
    }

  }

  doOpenPhotoMenu() {
    let photoSelection = this.modalCtrl.create('SelectModalPage', {
      title: 'Set Profile Photo',
      selections: [
        'New Profile Photo',
        'Import from Facebook',
        'Import from Google+'
      ]
    }, {cssClass: 'selections', showBackdrop: true, enableBackdropDismiss: true});

    photoSelection.onDidDismiss(choice => {
      console.log('choice', choice);
    });

    photoSelection.present();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    // this.viewCtrl.dismiss(this.pet);
    this.navCtrl.pop().then(() => this.navParams.get('resolve')(this.pet));
  }
}
