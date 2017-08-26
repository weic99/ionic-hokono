import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import firebase from 'firebase';

@Injectable()
export class UserProvider {

  constructor(
    private platform: Platform,
    private googlePlus: GooglePlus,
  ) {
    // console.log('Hello UserProvider Provider');
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
        })
    } else if (this.platform.is('mobileweb')) {
      return <Promise<any>>firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }

}
