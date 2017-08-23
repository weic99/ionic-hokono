import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pics: any;
  pokemonsRef$: FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: AngularFireDatabase
  ) {
    this.pokemonsRef$ = this.firebase.list('api/pokemon');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.pokemonsRef$);
  }

}

import {updateImgs} from "ionic-angular/components/content/content";
import {ViewChild} from "@angular/core";
import {Content} from "ionic-angular";

@Component({
  templateUrl: 'virtual-list.html',
})
export class VirtualListPage {
  @ViewChild(Content) _content: Content;
  ngAfterViewInit(){
    if(this._content) {
      this._content.imgsUpdate = () => {
        if (this._content._scroll.initialized && this._content._imgs.length && this._content.isImgsUpdatable()) {
          // reset cached bounds
          this._content._imgs.forEach((img:Img)=>img._rect = null);
          // use global position to calculate if an img is in the viewable area
          updateImgs(this._content._imgs, this._content._cTop * -1, this._content.contentHeight, this._content.directionY, 1400, 400);
        }
      };
    }
  }
}
