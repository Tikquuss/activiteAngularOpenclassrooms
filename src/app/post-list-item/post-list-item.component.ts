import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  
  @Input() title: string = 'Unknow title';
  @Input() content: string = '';
  @Input() loveIts: number = 0;
  @Input() create_at: Date = new Date();
  @Input() index: number;
    
  constructor(private postService: PostService) { }

  ngOnInit() {}

  getColor() {
    if(this.loveIts >= 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onLikeIt() {
    this.loveIts++;
    this.postService.updateLoveItsPost(this.index, 1);
  }

  onDisLikeIt() {
    this.loveIts--;
    this.postService.updateLoveItsPost(this.index, -1);
  }

  onDelete(){
    if(confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.postService.deletePost(this.index);
    } else {
      return null;
    }

  }
}
