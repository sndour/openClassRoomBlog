import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openClassRoomBlog';

  posts = [
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

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };
}
