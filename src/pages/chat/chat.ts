import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import { User } from '../../models/user';
import { Message } from '../../models/message'


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;

  friend = {} as User;
  user = {} as User;
  newMessage = {} as Message;
  messages = [] as Message[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.friend.displayName = 'Mario';

    this.messages = [
      {
        sender: 'Mario',
        receiver: '',
        body: 'Hi'
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'Hi'
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'heyyyyyyyyyyyyyyyyy'
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'heeeeeeelllllloooooooooooooooooooooooooooooooooo'
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'heeeeeeelllllloooooooooooooooooooooooooooooooooo'
      },
    ];
  }

  ionViewDidLoad() {

  }

  sendMessage(e) {
    console.log('message', this.newMessage.body, e);

    this.newMessage = {} as Message;
    e.target.reset();
  }

  scrollToBottom() {
    console.log('focus');
    this.content.scrollToBottom();
  }
}
