import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {PostsServiceService} from '../services/posts-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input()
    //postList = [];
  postList: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsServiceService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postList = posts;
        console.log(this.postList);
      }
    );

    this.postsService.emitPost();
  }

}
