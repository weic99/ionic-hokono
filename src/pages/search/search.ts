import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  query: string = ''; /** search query */
  pets: any[] = []; /** pets to display */
  petRef$: FirebaseListObservable<any[]>; /** pet observable */
  totalPets: number;
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider,
    public User: UserProvider,
  ) {
    this.petRef$ = this.firebase.getAllPets(10);
    let a = this.petRef$.subscribe(pets => {
      this.pets = pets.reverse();
      this.totalPets = this.pets.length;
      a.unsubscribe();
    });
    this.query = '';
    this.user = User.user;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchPage');
  }

  ionViewDidEnter() {
    /** get the rest */
    if (this.totalPets === 200) return;
    setTimeout(() => {
      this.totalPets = 200;
      this.petRef$ = this.firebase.getAllPets(this.totalPets);
      let a = this.petRef$.subscribe(pets => {
        this.pets.push(...pets.slice(this.pets.length).reverse());
        a.unsubscribe();
      });
    }, 0);
  }

  toggleLike(pet) {
    this.firebase.togglePetLike(pet.$key, pet, !(pet['starredBy'] && pet['starredBy'][this.user.uid]));

    if (pet['starredBy'] && pet['starredBy'][this.user.uid]) {
      delete pet['starredBy'][this.user.uid];
    } else {
      pet['starredBy'] = pet['starredBy'] || {};
      pet['starredBy'][this.user.uid] = { displayName: this.user.displayName, createdAt: Date.now() };
    }
  }

  toggleFollow(pet) {
    this.firebase.togglePetFollow(pet.$key, pet, !(pet['followers'] && pet['followers'][this.user.uid]));

    if (pet['followers'] && pet['followers'][this.user.uid]) {
      delete pet['followers'][this.user.uid];
    } else {
      pet['followers'] = pet['followers'] || {};
      pet['followers'][this.user.uid] = { displayName: this.user.displayName };
    }
  }

  petSelected(pet) {
    this.navCtrl.push('PetProfilePage', {pet: pet});
  }
}
