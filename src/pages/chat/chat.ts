import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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
    public navParams: NavParams,
    private afAuth: AngularFireAuth
  ) {

    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user.displayName = null;
        return;
      }
      this.user.displayName = user.displayName;
    });

    this.friend.displayName = 'Mario';
    this.newMessage.sender = this.user.displayName //set to displayName;
    this.newMessage.receiver = this.friend.displayName

    this.messages = [
      {
        sender: 'Mario',
        receiver: '',
        body: 'Hi',
        date: Date.now() - 6000000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'Hi',
        date: Date.now() - 500000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'heyyyyyyyyyyyyyyyyy',
        date: Date.now() - 400000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'heyyyyyyyyyyyyyyyyy',
        date: Date.now() - 300000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'heeeeeeelllllloooooooooooooooooooooooooooooooooo',
        date: Date.now() - 200000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'yooooooooooooooooooooooooooooooooooooooooooo',
        date: Date.now() - 100000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'yooooooooooooooooooooooooooooooooooooooooooo',
        date: Date.now() - 90000
      },
      {
        sender: 'Mario',
        receiver: '',
        body: 'yooooooooooooooooooooooooooooooooooooooooooo',
        date: Date.now() - 60000
      },
      {
        sender: 'Me',
        receiver: 'Mario',
        body: 'k',
        date: Date.now()
      },
    ];
  }

  sendMessage(e) {
    if(!this.newMessage.body) {
      return;
    }

    this.messages.push({
      ...this.newMessage,
      sender: 'You',
      receiver: 'Mario',
      date: Date.now()
    })

    this.newMessage.body = undefined;
    e.target.reset();

    /** Make sure the newMessage is rendered */
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }

  scrollToBottom(delay = 300) {
    this.content.scrollToBottom(delay);
  }
}
