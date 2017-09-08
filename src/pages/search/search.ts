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
    public User: UserProvider
  ) {
    this.petRef$ = this.firebase.getAllPets(10);
    this.petRef$.subscribe(pets => {
      this.pets = pets.reverse();
      this.totalPets = this.pets.length;
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
      this.petRef$.subscribe(pets => {
        this.pets.push(...pets.slice(this.pets.length).reverse());
      });
    }, 0);
  }

  doSearch() {

  }

  toggleLike(pet) {
    // pet['starredBy'] = (pet['starredBy'] || {});
    // pet['starredBy'][this.user.uid] = pet['starredBy'][this.user.uid]
    //   ? {}
    //   : {
    //     createdAt: Date.now(),
    //     displayName: this.user.displayName
    //   };

    this.firebase.togglePetLike(pet.$key, pet, !(pet['starredBy'] && pet['starredBy'][this.user.uid]));
  }

  toggleFollow(pet) {
    this.firebase.togglePetFollow(pet.$key, pet, !(pet['followers'] && pet['followers'][this.user.uid]));
  }
}
