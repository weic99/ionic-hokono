import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pics: any;
  pokemonsRef$: FirebaseListObservable<any[]>;
  pokemons: any;
  totalPokemons: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: AngularFireDatabase
  ) {
    this.pokemonsRef$ = this.firebase.list('api/pokemon', {
      query: {
        limitToFirst: 10,
      }
    });
    this.totalPokemons = 10;
    this.pokemonsRef$.subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  ionViewDidEnter() {
    this.pokemonsRef$ = this.firebase.list('api/pokemon', {
      query: {
        limitToFirst: 15,
      }
    });
    this.totalPokemons = 15;
    this.pokemonsRef$.subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    //console.log('Begin async operation');

    setTimeout(() => {
      this.totalPokemons = this.totalPokemons + 10;
      this.pokemonsRef$ = this.firebase.list('api/pokemon', {
        query: {
          limitToFirst: this.totalPokemons,
        }
      });
      this.pokemonsRef$.subscribe(pokemons => {
        this.pokemons = pokemons;
      });
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
