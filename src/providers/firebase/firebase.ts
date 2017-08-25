import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(
    private db: AngularFireDatabase
  ) {
    // console.log('Hello FirebaseProvider Provider');
  }

  getPets() {

  }
}
