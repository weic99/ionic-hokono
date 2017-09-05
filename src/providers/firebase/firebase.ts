import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  profileUrl: string = 'accounts';

  constructor(
    private db: AngularFireDatabase
  ) {
    // console.log('Hello FirebaseProvider Provider');
  }

  getProfile(uid): FirebaseObjectObservable<any> {
    return this.db.object(`${this.profileUrl}/${uid}`);
  }

  updateProfile(uid, profile) {
    return this.db.object(`${this.profileUrl}/${uid}`).set(profile);
  }

  getPets(limit: number = 0) {
    return this.db.list('api/pokemon', {
      query: {
        limitToFirst: limit
      }
    });
  }

  getAllPets(limit: number = 10) {
    return this.db.list('api/pets', {
      query: {
        limitToFirst: limit
      }
    });
  }

  postNewPet() {
    return this.db.list('api/pets/new');
  }
}
