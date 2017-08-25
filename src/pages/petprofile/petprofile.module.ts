import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetprofilePage } from './petprofile';

@NgModule({
  declarations: [
    PetprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(PetprofilePage),
  ],
})
export class PetprofilePageModule {}
