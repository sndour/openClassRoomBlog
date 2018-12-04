import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor () {
    const config = {
      apiKey: 'AIzaSyAYYHkyhdRUJ47mrKmH62_tDugPBfnhsDI',
      authDomain: 'blogopenclassroom-d7c8e.firebaseapp.com',
      databaseURL: 'https://blogopenclassroom-d7c8e.firebaseio.com',
      projectId: 'blogopenclassroom-d7c8e',
      storageBucket: 'blogopenclassroom-d7c8e.appspot.com',
      messagingSenderId: '863306912394'
    };
    firebase.initializeApp(config);
  }
  // title = 'openClassRoomBlog';

  /*posts = [
    {
      title: "la vie est belle",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression"
    },
    {
      title: "Il faut se battre pour mériter ce qu'on veut",
      content:" Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
    },
    {
      title: "cours de rap",
      content:" Je rap depuis 4 piges, bla bla bla bla."
    }

  ]
*/
 /* post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };*/
}
