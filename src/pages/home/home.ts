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

  user = {} as User;
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
      this.user.displayName = user.displayName;

      this.firebase.getAllPosts().subscribe(posts => {
        this.posts = posts;
      });

    });

  }

  goToPost(post) {
    this.navCtrl.push('PostPage', { post });
  }

  doUpVote(comment) {
    comment.likes++;
  }

  createPost() {
    this.navCtrl.push('CreatePostPage');
  }
}
