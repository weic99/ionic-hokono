import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Pet }    from '../../models/pet';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  image: string;
  sex: string;
  age: {
    years: string,
    months: string
  }

  newPet: Pet;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {
    this.age = {
      years: '',
      months: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  async doTakePicture() {
    try {
      this.image = 'data:image/jpeg;base64,' + await this.camera.getPicture(this.options);
    } catch (e) {
      console.log('doTakePicture()', e);
    }
  }



}
