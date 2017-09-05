import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { UserProvider } from '../user/user';

@Injectable()
export class FirebaseProvider {

  profileUrl: string = 'accounts';
  getMyPetsUrl: string = 'pets';

  constructor(
    private db: AngularFireDatabase,
    private auth: UserProvider
  ) {
    // console.log('Hello FirebaseProvider Provider');
  }

  getProfile(): FirebaseObjectObservable<any> {
    return this.db.object(`${this.profileUrl}/${this.auth.user.uid}`);
  }

  updateProfile(profile) {
    return this.db.object(`${this.profileUrl}/${this.auth.user.uid}`).update(profile);
  }

  getPets(limit: number = 1) {
    return this.db.list(`${this.profileUrl}/${this.auth.user.uid}/${this.getMyPetsUrl}`, {
      query: {
        limitToFirst: limit
      }
    });
  }

  updatePetProfile(key, profile) {
    return this.db.list(`${this.profileUrl}/${this.auth.user.uid}/${this.getMyPetsUrl}`).update(key, profile);
  }

  getAllPets(limit: number = 10) {
    return this.db.list('pets', {
      query: {
        limitToFirst: limit
      }
    });
  }

  postNewPet() {
    return this.db.list('api/pets/new');
  }
}
