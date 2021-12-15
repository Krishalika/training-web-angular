import { Component, OnInit, Input } from '@angular/core';
import Post from './../models/Post';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {
  @Input() data?: Post;
  constructor() { }
  public readMore: Boolean = false;
  ngOnInit(): void {
  }

  public showMore(): void {
    this.readMore = !this.readMore;
  }

}