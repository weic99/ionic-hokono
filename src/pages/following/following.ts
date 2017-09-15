import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { UserProvider } from '../../providers/user/user';

import { User } from '../../models/user';
import { Post } from '../../models/post';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  user: any;
  // posts
  posts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private firebase: FirebaseProvider,
    public User: UserProvider,
  ) {
    this.user = User.user;
  }

  ionViewDidEnter() {
    this.firebase.getMyFollowingPosts()
      .then(newPosts => {
        this.posts = Object.values(newPosts).sort((a, b) => b.timeStamp - a.timeStamp);
      });
  }

  doRefresh(refresher) {
    this.firebase.getMyFollowingPosts()
      .then(newPosts => {
        this.posts = Object.values(newPosts).sort((a, b) => b.timeStamp - a.timeStamp);
        refresher.complete();
      })
      .catch(() => refresher.complete());
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
}
