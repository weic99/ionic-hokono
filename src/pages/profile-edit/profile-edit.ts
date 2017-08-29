import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  profile: any;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');
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
    this.viewCtrl.dismiss(this.profile);
  }

}
