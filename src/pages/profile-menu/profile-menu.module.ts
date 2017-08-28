import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMenuPage } from './profile-menu';

@NgModule({
  declarations: [
    ProfileMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileMenuPage),
  ],
  entryComponents: [
		ProfileMenuPage
  ],
  exports: [
    ProfileMenuPage
  ]
})
export class ProfileMenuPageModule {}
