import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-modal',
  templateUrl: 'select-modal.html',
})
export class SelectModalPage {

  title: string;
  selections: string[];

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) { }

  ionViewWillLoad() {
    this.title = this.navParams.get('title');
    this.selections = this.navParams.get('selections');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  confirm(select: string) {
    this.viewCtrl.dismiss(select);
  }

}
