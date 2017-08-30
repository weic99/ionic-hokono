import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { Message } from '../../models/message'


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  friend = {} as User;
  user = {} as User;
  newMessage = {} as Message;
  messages = [] as Message[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.friend.displayName = 'Mario';
  }

  ionViewDidLoad() {

  }

  sendMessage(e) {
    console.log('message', this.newMessage.body, e);

    this.newMessage = {} as Message;
    e.target.reset();
  }

}
