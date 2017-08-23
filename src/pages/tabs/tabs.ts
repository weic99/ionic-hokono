import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SearchPage';
  tab3Root = 'CameraPage';
  tab4Root = 'FollowingPage';
  tab5Root = 'ProfilePage';

  constructor() {

  }
}
