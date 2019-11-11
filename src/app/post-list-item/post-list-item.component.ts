import { Component, OnInit, Input } from '@angular/core';

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
    
  constructor() { }

  ngOnInit() {
    
  }

  getColor() {
    if(this.loveIts >= 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onLikeIt() {
    this.loveIts++;
  }

  onDisLikeIt() {
    this.loveIts--;
  }
}
