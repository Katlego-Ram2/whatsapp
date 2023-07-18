import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  icons = [
    { class: 'fa-solid fa-face-smile fa-xl', name: 'Face Smile' },
    { class: 'fa-solid fa-paperclip fa-xl', name: 'Attach' },
    { class: 'input', name: 'Input' },
    { class: 'fa-solid fa-microphone fa-xl', name: 'Mic' }
  ];
  
}
