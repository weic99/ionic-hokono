import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetProfileEditPage } from './pet-profile-edit';

@NgModule({
  declarations: [
    PetProfileEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PetProfileEditPage),
  ],
})
export class PetProfileEditPageModule {}
