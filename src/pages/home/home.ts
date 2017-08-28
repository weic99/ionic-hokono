import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user';
import { Post } from '../../models/post';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user = {} as User;

  posts = [] as Post[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private storage: Storage
  ) {

    afAuth.authState.subscribe(user => {
      if (!user) {
        this.user.displayName = null;
        return;
      }
      this.user.displayName = user.displayName;
    });

    this.posts = [
      {
        user: {
          avatar: 'http://cdn.pcwallart.com/images/corgi-puppy-sleeping-wallpaper-3.jpg',
          username: 'Dr. Ian Malcolm'
        },
        date: 'November 5, 2024',
        image: 'http://cdn.pcwallart.com/images/corgi-puppy-sleeping-wallpaper-3.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
        likes: 2202
      },
      {
        user: {
          avatar: 'https://www.skinnerspetfoods.co.uk/wp-content/uploads/2017/04/puppypacks-lifestyle-700x649.jpg',
          username: 'Marty McFly'
        },
        date: 'June 28, 2024',
        image: 'https://www.skinnerspetfoods.co.uk/wp-content/uploads/2017/04/puppypacks-lifestyle-700x649.jpg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        likes: 1337
      },
      {
        user: {
          avatar: 'https://i.ytimg.com/vi/VRiWE1l8KqI/maxresdefault.jpg',
          username: 'Sarah Connor'
        },
        date: 'May 12, 2024',
        image: 'https://i.ytimg.com/vi/VRiWE1l8KqI/maxresdefault.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.',
        likes: 1109
      }
    ];
  }
}
