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
  pets: any = []; /** pets to display */
  petRef$: FirebaseListObservable<any[]>; /** pet observable */

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider
  ) {
    this.petRef$ = this.firebase.getAllPets();
    this.query = '';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchPage');
  }

  doSearch() {

  }

}
