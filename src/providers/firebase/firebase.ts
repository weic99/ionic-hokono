import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  profileUrl: string = 'accounts';
  getMyPetsUrl: string = 'pets';

  constructor(
    private db: AngularFireDatabase
  ) {
    // console.log('Hello FirebaseProvider Provider');
  }

  getProfile(uid): FirebaseObjectObservable<any> {
    return this.db.object(`${this.profileUrl}/${uid}`);
  }

  updateProfile(uid, profile) {
    return this.db.object(`${this.profileUrl}/${uid}`).update(profile);
  }

  getPets(uid, limit: number = 0) {
    return this.db.list(`${this.profileUrl}/${uid}/${this.getMyPetsUrl}`, {
      query: {
        limitToFirst: limit
      }
    });
  }

  updatePetProfile(uid, key, profile) {
    return this.db.list(`${this.profileUrl}/${uid}/${this.getMyPetsUrl}`).update(key, profile);
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
