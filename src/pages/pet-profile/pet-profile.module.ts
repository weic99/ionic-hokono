import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetProfilePage } from './pet-profile';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PetProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PetProfilePage),
    PipesModule
  ],
})
export class PetProfilePageModule {}
