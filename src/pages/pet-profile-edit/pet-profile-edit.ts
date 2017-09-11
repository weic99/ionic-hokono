import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
    private camera: Camera,
    public modalCtrl: ModalController
  ) { }

  ionViewWillLoad() {
    this.pet = this.navParams.get('pet');
    // let petProfile = this.navParams.get('pet');

    // if (petProfile === undefined) {
    //   this.navCtrl.setRoot('ProfilePage');
    // } else {
    //   this.pet = { ...this.pet, ...petProfile }
    // }

  }

  doOpenPhotoMenu() {
    let photoSelection = this.modalCtrl.create('SelectModalPage', {
      title: 'Set Profile Photo',
      selections: [
        'Camera',
        'Album',
        'Import from Facebook',
        'Import from Google+'
      ]
    }, {cssClass: 'selections', showBackdrop: true, enableBackdropDismiss: true});

    photoSelection.onDidDismiss(choice => {
      //console.log('choice', choice);
      if (choice === 'Album') {
        this.doGetPictures();
      } else if (choice === 'Camera') {
        this.doTakePicture();
      }
    });

    photoSelection.present();
  }

  doTakePicture() {
    let options: CameraOptions = {
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      destinationType: this.camera.DestinationType.FILE_URI, // use file_uri in prod
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      // saveToPhotoAlbum: true,
    };
    this.camera.getPicture(options)
      .then(imageURI => {
        //console.log('imageuri', imageURI);
        this.pet.filePath = imageURI;
      })
      .catch(err => {
        console.error('doTakePicture()', err);
      });
  }

  doGetPictures() {
    var picOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      allowEdit: true,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(picOptions)
      .then((url) => {
        //console.log(url);
        this.pet.filePath = url;
      })
      .catch((err) => {
        console.log('Failed to get picture');
      });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.viewCtrl.dismiss(this.pet);
    // this.navCtrl.pop().then(() => this.navParams.get('resolve')(this.pet));
  }
}
