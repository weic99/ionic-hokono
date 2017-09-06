import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectUsernamePage } from './select-username';

@NgModule({
  declarations: [
    SelectUsernamePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectUsernamePage),
  ],
})
export class SelectUsernamePageModule {}
