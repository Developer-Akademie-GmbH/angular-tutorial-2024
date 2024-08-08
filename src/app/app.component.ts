import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';

interface Post {
  name:string,
  img:string,
  text:string,
  time:string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data:Array<Post> = [];
  
  async ngOnInit(){
    this.data = await (await fetch('./assets/data/posts.json')).json();
    console.log(this.data);
  }

}
