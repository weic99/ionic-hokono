import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user: any = {
    displayName: 'Guest'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    storage.get('user').then((user) => {
      console.log('user is', typeof JSON.parse(user),  JSON.parse(user));
      this.user = JSON.parse(user);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage', this.user);
  }

}
