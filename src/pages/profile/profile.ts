import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pics: any;
  petRef$: FirebaseListObservable<any[]>;
  pets: any;
  totalPets: number;
  filter: string;

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider,
    private storage: Storage,
    private afAuth: AngularFireAuth

  ) {
    /** check if user is logged in */
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.user.displayName = null;
        return;
      }
      this.user.displayName = user.displayName;
    });

    this.petRef$ = this.firebase.getPets(15);
    this.totalPets = 15;
    this.petRef$.subscribe(pets => {
      this.pets = pets;
    });
    this.filter = '';
  }

  ionViewDidEnter() { }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 1500);
  }

  doInfinite(infiniteScroll) {
    //console.log('Begin async operation');

    setTimeout(() => {
      this.totalPets = this.totalPets + 10;
      this.petRef$ = this.firebase.getPets(this.totalPets);
      this.petRef$.subscribe(pets => {
        this.pets.push(...pets.slice(-10));
      });
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 0);
  }

  doEditPet(pet) {
    this.navCtrl.push('PetprofilePage', {pet});
  }

}
