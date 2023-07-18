import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  icons = [
    { class: 'fa-solid fa-video fa-lg', name: 'Video' },
    { class: 'fa-solid fa-phone fa-lg', name: 'Phone' },
    { class: 'separator', name: 'Separator' },
    { class: 'fa-solid fa-magnifying-glass fa-lg', name: 'Magnifying Glass' },
    { class: 'fa-solid fa-caret-down fa-lg', name: 'Caret Down' }
  ];
  
  
}
