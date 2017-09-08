import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import { User } from '../../models/user';
import { Post } from '../../models/post';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  user: any
  posts = [] as Post[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private firebase: FirebaseProvider
  ) {

    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user.displayName = 'Guest';
        return;
      }
      this.user = user;
      console.log('user', this.user, this.user.uid);
      let a = this.firebase.getAllPosts().subscribe(posts => {
        this.posts = posts.reverse();
        a.unsubscribe();
      });

    });

  }

  doRefresh(refresher) {
    let a = this.firebase.getAllPosts().subscribe(posts => {
      this.posts = posts.reverse();
      a.unsubscribe();
      refresher.complete();
    });
  }

  goToPost(post) {
    this.navCtrl.push('PostPage', { post });
  }

  toggleLike(post) {
    this.firebase.togglePostLike(
      post.$key,
      post.petId,
      post.ownerUid,
      !(post['likedBy'] && post['likedBy'][this.user.uid])
    );

    if (post['likedBy'] && post['likedBy'][this.user.uid]) {
      delete post['likedBy'][this.user.uid];
      post.likes--;
    } else {
      post['likedBy'] = post['likedBy'] || {};
      post['likedBy'][this.user.uid] = { timeStamp : Date.now() };
      post.likes++;
    }
  }

  createPost() {
    this.navCtrl.push('CreatePostPage');
  }
}
