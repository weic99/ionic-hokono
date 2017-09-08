import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { UserProvider } from '../user/user';

@Injectable()
export class FirebaseProvider {

  profileUrl: string = 'accounts';
  getMyPetsUrl: string = 'pets';

  myStarsUrl: string = 'myStars';
  myFollowingUrl: string = 'following';

  petStarredByUrl: string = 'starredBy';
  petFollowersUrl:string = 'followers';

  globalPetUrl: string = 'pets';
  globalPostsUrl: string ='posts';

  constructor(
    private db: AngularFireDatabase,
    private auth: UserProvider
  ) {
    // console.log('Hello FirebaseProvider Provider');
  }

  getProfile(): FirebaseObjectObservable<any> {
    return this.db.object(`${this.profileUrl}/${this.auth.user.uid}`);
  }

  getPets(limit: number = 1) {
    return this.db.list(`${this.profileUrl}/${this.auth.user.uid}/${this.getMyPetsUrl}`, {
      query: {
        limitToFirst: limit
      }
    });
  }

  getAllPets(limit: number = 10) {
    return this.db.list(this.globalPetUrl, {
      query: {
        limitToLast: limit,
      }
    });
  }

  getAllPosts(limit: number = 10) {
    return this.db.list(this.globalPostsUrl, {
      query: {
        limitToLast: limit,
        orderByChild: 'likes'
      }
    });
  }

  getMyFollowingPosts() {

  }

  togglePetFollow(key, profile, like = true) {
    let bundle = {};

    if (like) {
      bundle[`/${this.profileUrl}/${this.auth.user.uid}/${this.myFollowingUrl}/${key}`] = { name: profile.name };
      bundle[`/${this.profileUrl}/${profile.ownerUid}/${this.getMyPetsUrl}/${key}/${this.petFollowersUrl}/${this.auth.user.uid}`] = { displayName: this.auth.user.displayName };
      bundle[`/${this.globalPetUrl}/${key}/${this.petFollowersUrl}/${this.auth.user.uid}`] = { displayName: this.auth.user.displayName };
    } else {
      bundle[`/${this.profileUrl}/${this.auth.user.uid}/${this.myFollowingUrl}/${key}`] = {};
      bundle[`/${this.profileUrl}/${profile.ownerUid}/${this.getMyPetsUrl}/${key}/${this.petFollowersUrl}/${this.auth.user.uid}`] = {};
      bundle[`/${this.globalPetUrl}/${key}/${this.petFollowersUrl}/${this.auth.user.uid}`] = {};
    }

    return this.db.database.ref().update(bundle);
  }

  togglePetLike(key, profile, like = true) {
    let bundle = {};

    if (like) {
      bundle[`/${this.profileUrl}/${this.auth.user.uid}/${this.myStarsUrl}/${key}`] = { name: profile.name };
      bundle[`/${this.profileUrl}/${profile.ownerUid}/${this.getMyPetsUrl}/${key}/${this.petStarredByUrl}/${this.auth.user.uid}`] = { displayName: this.auth.user.displayName, createdAt: Date.now() };
      bundle[`/${this.globalPetUrl}/${key}/${this.petStarredByUrl}/${this.auth.user.uid}`] = { displayName: this.auth.user.displayName, createdAt: Date.now() };
    } else {
      bundle[`/${this.profileUrl}/${this.auth.user.uid}/${this.myStarsUrl}/${key}`] = {};
      bundle[`/${this.profileUrl}/${profile.ownerUid}/${this.getMyPetsUrl}/${key}/${this.petStarredByUrl}/${this.auth.user.uid}`] = {};
      bundle[`/${this.globalPetUrl}/${key}/${this.petStarredByUrl}/${this.auth.user.uid}`] = {};
    }

    return this.db.database.ref().update(bundle);
  }

  updatePetProfile(key, profile) {
    this.db.list(this.globalPetUrl).update(key, profile);
    return this.db.list(`${this.profileUrl}/${profile.ownerUid}/${this.getMyPetsUrl}`).update(key, profile);
  }

  updateProfile(profile) {
    return this.db.object(`${this.profileUrl}/${this.auth.user.uid}`).update(profile);
  }

  postNewPet(newPet) {
    this.db.list(this.globalPetUrl).push(newPet);
    return this.db.list(`${this.profileUrl}/${this.auth.user.uid}/${this.getMyPetsUrl}`).push(newPet);
  }
}
