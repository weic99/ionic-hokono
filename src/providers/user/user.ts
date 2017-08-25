import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { auth } from 'firebase';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserProvider {
  user: User;

  constructor(
    public http: Http,
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private storage: Storage
  ) {
    // console.log('Hello UserProvider Provider');
  }

  googleSignIn() {
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {
        console.log('android');
        return this.googlePlus.login({
          'webClientId':'340279576545-a6a44103erdp6k8re3nkqulch08c1j21.apps.googleusercontent.com'
          })
          .then(userData => {
            console.log('googlePlus.login', userData);
            this.storage.set('user', JSON.stringify(userData));
          //   let token = userData.idToken;
          //   const googleCredential = auth.GoogleAuthProvider.credential(token);
          //   return this.afAuth.auth.signInWithCredential(googleCredential)
          //     .then((success)=>{
          //       console.log('login success', success.user.displayName);
          //       observer.next(success);
          //     })
          //     .catch(err => {
          //       console.log('android signInWithCredential failed', err);
          //     });
            observer.next(true);
          })
          .catch(err => {
            console.log('android googlePlus.login failed', err);
          });
      } else {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
          .then((res)=>{
            console.log('login success', res.user.displayName);
            this.storage.set('user', JSON.stringify(res.user));
            observer.next(true);
          }).catch(error => {
            //console.log(error);
            observer.error(error);
        });
      }
    });
  }

}
