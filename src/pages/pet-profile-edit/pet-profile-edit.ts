import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pet-profile-edit',
  templateUrl: 'pet-profile-edit.html',
})
export class PetProfileEditPage {

  pet: any /** switch to pet model later */

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  ionViewWillLoad() {
    this.pet = this.navParams.get('pet');
  }

  doOpenPhotoMenu() {
    let photoSelection = this.modalCtrl.create('SelectModalPage', {
      title: 'Set Profile Photo',
      selections: [
        'New Profile Photo',
        'Import from Facebook',
        'Import from Google+'
      ]
    }, {cssClass: 'selections', enableBackdropDismiss: true});

    photoSelection.onDidDismiss(choice => {
      // if (newProfile) {
      //   this.pets[pet.number - 1] = newProfile;
      // }
      console.log('choice', choice);
    });

    photoSelection.present();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.viewCtrl.dismiss(this.pet);
  }
}
