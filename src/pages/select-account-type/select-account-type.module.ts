import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectAccountTypePage } from './select-account-type';

@NgModule({
  declarations: [
    SelectAccountTypePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectAccountTypePage),
  ],
})
export class SelectAccountTypePageModule {}
