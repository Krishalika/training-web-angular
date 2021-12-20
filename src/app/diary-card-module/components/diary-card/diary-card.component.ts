import { Component, Input, OnInit } from '@angular/core';
import DiaryCardObject from "../../models/DiaryCardObject";

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})

export class DiaryCardComponent implements OnInit {
  @Input() data?: DiaryCardObject;
  constructor() {
  }

  public isExpand:boolean= false;

  ngOnInit(): void {}

  public showMore():void {
    this.isExpand = !this.isExpand;
  }
}
