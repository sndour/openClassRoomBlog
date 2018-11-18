import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openClassRoomBlog';

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };
}
