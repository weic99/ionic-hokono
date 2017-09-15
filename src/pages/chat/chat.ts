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

    // this.afAuth.authState.subscribe(user => {
    //   if (!user) {
    //     this.user.displayName = null;
    //     return;
    //   }
    //   this.user.displayName = user.displayName;
    // });

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
  }

  sendMessage(e) {
    if(!this.newMessage.data.text) {
      return;
    }

    // this.messages.push({
    //   ...this.newMessage,
    //   timeStamp: Date.now()
    // })

    this.firebase.postNewChat({...this.newMessage, timeStamp: Date.now(), type: 'text'}, this.user.profile.displayName)
      .then(() => this.content.scrollToBottom());

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
