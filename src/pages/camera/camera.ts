import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';

import { Pet } from '../../models/pet';

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
    private photoLibrary: PhotoLibrary
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
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => {},
        complete: () => { console.log('could not get photos'); }
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }

  doSubmit() {
    console.log('new pet', this.newPet);
  }

}
