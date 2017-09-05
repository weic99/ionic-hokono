import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class UserProvider {

  user: any;

  constructor(
    private platform: Platform,
    private googlePlus: GooglePlus,
    private fb: Facebook,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user
      }
    });
  }

  googleSignIn(): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.googlePlus.login({
        'webClientId':'340279576545-a6a44103erdp6k8re3nkqulch08c1j21.apps.googleusercontent.com',
        'offline': true
        })
        .then(res => {
          return firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        })
        .catch(err => {
          console.log('err in google-plus', err);
          throw err;
        })
    } else if (this.platform.is('mobileweb')) {
      return <Promise<any>>firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }

  facebookSignIn(): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          return firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
        })
        .catch(err => {
          console.log('err in facebook', err);
          throw err;
        })
    } else if (this.platform.is('mobileweb')) {
      return <Promise<any>>firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }

  createUserWithEmailAndPassword(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
