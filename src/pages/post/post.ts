import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Post } from '../../models/post';
import { Comment } from '../../models/comment';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post = {} as Post;
  comments = []  as Comment[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.post = this.navParams.get('post');

    //get like top 20 comments
    this.comments = [
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'Hi1',
        date: Date.now() - 6000000,
        likes: 1232
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'Hi2',
        date: Date.now() - 500000,
        likes: 12232
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'heyyyyyyyyyyyyyyyyy',
        date: Date.now() - 400000,
        likes: 102
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'heyyyyyyyyyyyyyyyyy',
        date: Date.now() - 300000,
        likes: 0
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'heeeeeeelllllloooooooooooooooooooooooooooooooooo',
        date: Date.now() - 200000,
        likes: 1011
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'yooooooooooooooooooooooooooooooooooooooooooo',
        date: Date.now() - 100000,
        likes: 233
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'yooooooooooooooooooooooooooooooooooooooooooo',
        date: Date.now() - 90000,
        likes: 1095
      },
      {
        user: {
          username:'Mario',
          avatar: 'assets/Mario_icon_bubble.png'
        },
        body: 'k',
        date: Date.now(),
        likes: 89
      },
    ];
  }

  doRefresh(refresher) {
    //refresh the page

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  doInfinite(infiniteScroll) {

    // get more post comments
    setTimeout(() => {

      // this.totalPets = this.totalPets + 10;
      // this.petRef$ = this.firebase.getPets(this.totalPets);
      // this.petRef$.subscribe(pets => {
      //   this.pets.push(...pets.slice(-10));
      // });
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 200);
  }

}
