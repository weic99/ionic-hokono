import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
    private camera: Camera,
    public modalCtrl: ModalController
  ) { }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');
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
        this.profile.profPic = imageURI;
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
        this.profile.profPic = url;
      })
      .catch((err) => {
        console.log('Failed to get picture');
      });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.viewCtrl.dismiss(this.profile);
  }

}
