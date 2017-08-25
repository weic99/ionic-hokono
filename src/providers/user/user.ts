import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

import { Platform } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { auth } from 'firebase';

@Injectable()
export class UserProvider {
  user: User;

  constructor(
    public http: Http,
    private afAuth: AngularFireAuth
  ) {
    console.log('Hello UserProvider Provider');
  }

  googleSignIn() {

  }

}
