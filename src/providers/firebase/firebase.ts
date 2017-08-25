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

  getPets(limit: number = 0) {
    return this.db.list('api/pokemon', {
      query: {
        limitToFirst: limit
      }
    });
  }

  getAllPets() {
    return this.db.list('api/pets');
  }

  postNewPet() {
    return this.db.list('api/pets/new');
  }
}
