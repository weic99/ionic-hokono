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
  petRef$: FirebaseListObservable<any[]>;
  pets: any;
  totalPets: number;
  filter: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: AngularFireDatabase
  ) {
    this.petRef$ = this.firebase.list('api/pokemon', {
      query: {
        limitToFirst: 15,
      }
    });
    this.totalPets = 15;
    this.petRef$.subscribe(pets => {
      this.pets = pets;
    });
    this.filter = '';
  }

  ionViewDidEnter() {
    // this.petRef$ = this.firebase.list('api/pokemon', {
    //   query: {
    //     limitToFirst: 15,
    //   }
    // });
    // this.totalPets = 15;
    // this.petRef$.subscribe(pets => {
    //   this.pets = pets;
    // });
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
      this.totalPets = this.totalPets + 10;
      this.petRef$ = this.firebase.list('api/pokemon', {
        query: {
          limitToFirst: this.totalPets,
        }
      });
      this.petRef$.subscribe(pets => {
        this.pets.push(...pets.slice(-10));
      });
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
