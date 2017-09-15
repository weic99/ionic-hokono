import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-pet-profile',
  templateUrl: 'pet-profile.html',
})
export class PetProfilePage {

  pet: any;
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public User: UserProvider,
  ) {
    this.user = User.user;
    this.pet = this.navParams.get('pet');
    if (this.pet.posts) {
      this.pet.posts = Object.values(this.pet.posts).sort((a, b) => b.timeStamp - a.timeStamp) || [];
    }
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 1500);
  }
}
