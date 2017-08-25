import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
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
    private googlePlus: GooglePlus
  ) {
    console.log('Hello UserProvider Provider');
  }

  googleSignIn() {
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {
        return this.googlePlus.login({
          'webClientId':'340279576545-avnl68776h3fqu7s2ma90f9ugf1in9p1.apps.googleusercontent.com'
          })
          .then(userData => {
            let token = userData.idToken;
            const googleCredential = auth.GoogleAuthProvider.credential(token, null);
            this.afAuth.auth.signInWithCredential(googleCredential)
            .then((success)=>{
              observer.next(success);
            })
            .catch(err => {
            });
          })
          .catch(err => {
          });
      } else {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
          .then((success)=>{
            console.log('success');
            observer.next(success);
          }).catch(error => {
            //console.log(error);
            observer.error(error);
        });
      }
    });
  }

}
