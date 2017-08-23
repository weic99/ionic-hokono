import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { FilterPetsBySpeciesPipe } from '../../pipes/filter-pets-by-species/filter-pets-by-species';

@NgModule({
  declarations: [
    ProfilePage,
    FilterPetsBySpeciesPipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [FilterPetsBySpeciesPipe]
})
export class ProfilePageModule {}
