import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsServiceService } from '../services/posts-service.service';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  postList: Post[];
  postsSubscription: Subscription;
  constructor(private formBuilder: FormBuilder, private postsService: PostsServiceService, private router: Router) { }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required]
      }
    );
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title,  content);
    newPost.created_at = new Date().toString();
    newPost.loveIts = 0;
    this.postsService.createNewPost(newPost);
    console.log(newPost);
    this.router.navigate(['/posts']);
  }


  ngOnDestroy() {

  }
}
