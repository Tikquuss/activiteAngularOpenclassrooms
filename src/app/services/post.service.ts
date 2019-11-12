import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  
  postsSubject = new Subject<any[]>();
  private posts: Post[] = [];
  
  constructor() { 
    var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.";
    this.posts = [
      new Post('Mon premier post',content,0,new Date()),
      new Post('Mon deuxieme post',content,-1,new Date()),
      new Post('Mon troisieme post',content,1,new Date())
    ];
  }

  ngOnInit() {}

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  deletePost(index : number){
    this.posts =  this.posts.filter((elt , i)=>index!=i);
    this.emitPostsSubject();
  }

  // Pour enregistrer le changement du nombre de loveIts dans le service
  updateLoveItsPost(index : number, increment : number){
    // increment est dans l'ensemble {-1, 1}
    this.posts[index].loveIts += increment;
    this.emitPostsSubject();
  }
}