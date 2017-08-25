import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Pet } from '../../models/pet';

import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  newPet: Pet;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    // saveToPhotoAlbum: true,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private firebase: FirebaseProvider
  ) {
    this.newPet = new Pet();
    this.newPet.name = '';
    this.newPet.age = {
      years: undefined,
      months: undefined
    };
    this.newPet.image = '';
    this.newPet.notes = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  async doTakePicture() {
    try {
      this.newPet.image = 'data:image/jpeg;base64,' + await this.camera.getPicture(this.options);
    } catch (e) {
      console.log('doTakePicture()', e);
    }
  }

  doGetPictures() {
    var picOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(picOptions)
      .then((url) => {
        console.log(url);
        this.newPet.image = 'data:image/jpeg;base64,' + url;
      })
      .catch((err) => {
        console.log('Failed to get picture');
      });
  }

  doSubmit() {
    console.log('new pet', this.newPet);
    this.firebase.postNewPet().push(this.newPet);
  }

}
