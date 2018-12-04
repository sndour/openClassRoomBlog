import { Component, OnInit, Input } from '@angular/core';
import {PostsServiceService} from '../services/posts-service.service';
import {Subscription} from 'rxjs';
import { Post} from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostLIstItemComponent implements OnInit {


  @Input()
  title: string;
  @Input()
  content: string;
  loveIts = 0;
  @Input()
  created_at;
  @Input()
    index: number;
  string_convert;
  newDate;

  constructor(private postsService: PostsServiceService) {
    this.loveIts = 0;
  }

  ngOnInit() {

  }

  /*onConvertDate () {
    const string_convert = this.created_at;
    const newDate = new Date(string_convert);
    this.created_at = newDate;


  }*/
  onSupress() {
    this.postsService.removePost(this.index);
  }

  onLoveIt() {
    this.loveIts += 1;
    console.log('plus 1');
    console.log(this.loveIts);
  }

  onHateIt() {
    this.loveIts -= 1;
    console.log('moins 1');

    console.log(this.loveIts);
  }

}
