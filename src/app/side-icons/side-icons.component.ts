import { Component } from '@angular/core';

@Component({
  selector: 'app-side-icons',
  templateUrl: './side-icons.component.html',
  styleUrls: ['./side-icons.component.scss']
})
export class SideIconsComponent {
 
notifications = [
  { iconClass: 'fa-solid fa-bell fa-xl', text: 'Notification' },
  { iconClass: 'fa-solid fa-shield-halved fa-xl', text: 'Security' },
  { iconClass: 'fa-solid fa-certificate fa-xl', text: 'Theme' },
  { iconClass: 'fa-regular fa-image fa-xl', text: 'Chat Wallpaper' },
  { iconClass: 'fa-solid fa-ban fa-rotate-90 fa-xl', text: 'Blocked' },
  { iconClass: 'fa-solid fa-desktop fa-xl', text: 'Desktop Settings' },
  { iconClass: 'fa-solid fa-keyboard fa-xl', text: 'Keyboard Shortcuts' },
  { iconClass: 'fa-sharp fa-solid fa-circle-question fa-xl', text: 'Help' }
];

}
