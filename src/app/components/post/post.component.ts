import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() time: string = '';
  @Input() text: string = '';

}
