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

  posts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    storage.get('user').then((user) => {
      //console.log('user is', typeof JSON.parse(user),  (user));
      if(!!user) {
        this.user = JSON.parse(user);
      }
    });

    this.posts = [
      {
        user: {
          avatar: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user: {
          avatar: 'https://i.ytimg.com/vi/VRiWE1l8KqI/maxresdefault.jpg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'http://cdn.pcwallart.com/images/corgi-puppy-sleeping-wallpaper-3.jpg',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage', this.user);
  }

}
