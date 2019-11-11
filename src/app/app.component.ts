import { Component } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'activiteAngularOpenclassrooms';
  public content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat";
  posts = [
    new Post('Mon premier post',this.content,0,new Date()),
    new Post('Mon deuxieme post',this.content,-1,new Date()),
    new Post('Mon troisieme post',this.content,1,new Date()),
    new Post('Mon quatrieme post',this.content,-1,new Date())
  ];
}
