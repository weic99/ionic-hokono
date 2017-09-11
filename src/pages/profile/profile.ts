import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
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
  filter: string;

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider,
    private afAuth: AngularFireAuth,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
  ) {
    /** hard coded profile data */
    // this.user.profile = {
    //   avatar: 'assets/Me.JPG',
    //   name: 'Hack Reactor',
    //   address: '369 Lexington Ave. 11th Fl.',
    //   blurb: 'We Love Them Like You Do'
    // }

    /** check if user is logged in */
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.user.displayName = null;
        return;
      }
      this.user.displayName = user.displayName;
      this.user.uid = user.uid;

      this.firebase.getProfile()
        .subscribe(profile => {
          this.user.profile = profile;
        });

      /** get the user pets */
      this.petRef$ = this.firebase.getPets(15);
      this.petRef$.subscribe(pets => {
        this.pets = pets;
      });
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
      this.petRef$ = this.firebase.getPets(this.pets.length + 10);
      this.petRef$.subscribe(pets => {
        this.pets.push(...pets.slice(this.pets.length));
      });
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 0);
  }

  doEditPet(pet) {
    let edit = this.modalCtrl.create('PetProfileEditPage', {
      pet: {...pet}
    });

    edit.onDidDismiss(newProfile => {
      if (newProfile) {
        this.firebase.updatePetProfile(pet.$key, newProfile, newProfile.filePath !== pet.filePath);
      }
    });

    edit.present();

    // new Promise((resolve, reject) => {
    //   this.navCtrl.push('PetProfileEditPage', { resolve, pet });
    // }).then(newProfile => {
    //   this.pets[pet.number - 1] = newProfile;
    // });

  }

  doOpenMenu(e: Event) {
    this.afAuth.auth.signOut();
    /** not working */
    // let popover = this.popoverCtrl.create('ProfileMenuPage');
    // console.log('ok', e);
    // popover.present({ ev: e });
  }

  doEditProfile() {
    let edit = this.modalCtrl.create('ProfileEditPage', {
      profile: {...this.user.profile}
    });

    edit.onDidDismiss(newProfile => {
      if (newProfile) {
        this.firebase.updateProfile(newProfile, newProfile.profPic !== this.user.profile.profPic);
        this.user.profile = newProfile;
      }
    });

    edit.present();
  }

  doOpenChat() {
    this.navCtrl.push('ChatPage');
  }
}
