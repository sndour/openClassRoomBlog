import { Component, OnInit, Input } from '@angular/core';

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
  created_at;

  constructor() {
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit() {
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
