import { Component } from '@angular/core';

@Component({
  selector: 'profile-popover',
  templateUrl: 'profile-popover.html'
})
export class ProfilePopoverComponent {

  text: string;

  constructor() {
    console.log('Hello ProfilePopoverComponent Component');
    this.text = 'Hello World';
  }

}
