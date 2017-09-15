import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from '../../providers/firebase/firebase';

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
  user: any;
  newMessage = {} as Message;
  messages: any[] = [];
  readMessages: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private firebase: FirebaseProvider
  ) {

    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user.displayName = null;
        return;
      }
      this.user.displayName = user.displayName;
    });

    this.user = this.navParams.get('user');

    this.firebase.getMyChats()
      .subscribe(chatsBoxes => {
        if (chatsBoxes.length) {
          chatsBoxes.forEach(box => {
            let messageBox = (Object.values(Object.values(box)[0]));

            let newMessages = messageBox.map( msg => {
              if (msg.read !== true) {
                return msg;
              }
            });
            this.messages.push(...newMessages.slice(this.readMessages));
            this.readMessages = newMessages.length;
          });
        }
      });

    this.friend.displayName = 'Michaels FaceBook';
    this.newMessage.author = 'me' //set to displayName;
    this.newMessage.data = { text: '' };

    // this.messages = [
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'Hi',
    //     date: Date.now() - 6000000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'Hi',
    //     date: Date.now() - 500000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'heyyyyyyyyyyyyyyyyy',
    //     date: Date.now() - 400000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'heyyyyyyyyyyyyyyyyy',
    //     date: Date.now() - 300000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'heeeeeeelllllloooooooooooooooooooooooooooooooooo',
    //     date: Date.now() - 200000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'yooooooooooooooooooooooooooooooooooooooooooo',
    //     date: Date.now() - 100000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'yooooooooooooooooooooooooooooooooooooooooooo',
    //     date: Date.now() - 90000
    //   },
    //   {
    //     sender: 'Mario',
    //     receiver: '',
    //     body: 'yooooooooooooooooooooooooooooooooooooooooooo',
    //     date: Date.now() - 60000
    //   },
    //   {
    //     sender: 'Me',
    //     receiver: 'Mario',
    //     body: 'k',
    //     date: Date.now()
    //   },
    // ];
  }

  sendMessage(e) {
    if(!this.newMessage.data.text) {
      return;
    }

    this.messages.push({
      ...this.newMessage,
      timeStamp: Date.now()
    })

    this.newMessage.data = { text: undefined };
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
