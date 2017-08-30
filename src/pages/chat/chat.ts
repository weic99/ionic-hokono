import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  friend = {} as User;
  user = {} as User;
  message: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.friend.displayName = 'Mario';
  }

  ionViewDidLoad() {

  }

  sendMessage() {
    console.log('message', this.message);
  }

}
