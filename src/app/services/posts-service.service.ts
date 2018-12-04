import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPost() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPost();
      });
  }

  // methode pour enregistrer dans la base de donnée
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  // methode pour creer un post

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    console.log('post sauvegardé');
    this.emitPost();
  }

  // méthode pour enlever un post

  removePost (index: number) {

    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPost();
  }

}
