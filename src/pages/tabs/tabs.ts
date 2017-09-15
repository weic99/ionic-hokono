import { Component } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SearchPage';
  tab3Root = 'CameraPage';
  tab4Root = 'FollowingPage';
  tab5Root = 'ProfilePage';

  profilePageBadges: number = 0;
  newMessages: any[];

  constructor(
    private firebase: FirebaseProvider
  ) {
    this.firebase.getMyChats()
      .subscribe(chatsBoxes => {
        if (chatsBoxes.length) {
          chatsBoxes.forEach(box => {
            let messageBox = (Object.values(Object.values(box)[0]));

            let newMessages = messageBox.map( msg => {
              if (msg.read !== true) {
                //this.profilePageBadges++; /** needs fixes */
                return msg;
              }
            });
            this.newMessages = newMessages;
          });
        }
      });
  }
}
