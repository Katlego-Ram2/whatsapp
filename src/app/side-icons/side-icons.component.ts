import { Component } from '@angular/core';

@Component({
  selector: 'app-side-icons',
  templateUrl: './side-icons.component.html',
  styleUrls: ['./side-icons.component.scss']
})
export class SideIconsComponent {
  // Inside your component class
notifications = [
  { iconClass: 'fa-solid fa-bell fa-xl', text: 'Notification 1' },
  { iconClass: 'fa-solid fa-shield-halved fa-xl', text: 'Notification 2' },
  { iconClass: 'fa-solid fa-certificate fa-xl', text: 'Notification 3' },
  { iconClass: 'fa-regular fa-image fa-xl', text: 'Notification 4' },
  { iconClass: 'fa-solid fa-ban fa-rotate-90 fa-xl', text: 'Notification 5' },
  { iconClass: 'fa-solid fa-desktop fa-xl', text: 'Notification 6' },
  { iconClass: 'fa-solid fa-desktop fa-xl', text: 'Notification 7' },
  { iconClass: 'fa-sharp fa-solid fa-circle-question fa-xl', text: 'Notification 8' }
];

}
