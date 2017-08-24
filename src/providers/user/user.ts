import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

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
