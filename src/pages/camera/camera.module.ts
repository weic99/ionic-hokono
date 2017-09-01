import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
    DirectivesModule,
    PipesModule
  ],
})
export class CameraPageModule {}
