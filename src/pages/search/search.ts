import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider
  ) {
    this.petRef$ = this.firebase.getAllPets(10);
    this.petRef$.subscribe(pets => {
      this.pets = pets;
    });
    this.query = '';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchPage');
  }

  ionViewDidEnter() {
    /** get the rest */
    if (this.totalPets === 200) return;
    setTimeout(() => {
      this.totalPets = 200;
      this.petRef$ = this.firebase.getPets(this.totalPets);
      this.petRef$.subscribe(pets => {
        this.pets.push(...pets.slice(this.pets.length));
      });
    }, 0);
  }

  doSearch() {

  }

}
