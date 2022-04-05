import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card-module/models/card.model';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  @Input() card?: Card;
  @Input() index: number = 0;

  subtitle: string = "TestUser";
  color: string = "#B9E9FF"

  isExpanded: boolean = false;
  btnText: string = "SHOW MORE";

  constructor() { }

  ngOnInit(): void {
  }

  public showDescription(): string {
    if (this.card.description.length > 100) {
      if (this.isExpanded) return this.card.description;
      else {
        return this.card.description.substring(0, 100).concat(" ...");
      }
    }
    return this.card.description;
  }

  public toggleShowMore() {
    this.isExpanded = !this.isExpanded;
    this.btnText = this.isExpanded ? "SHOW LESS" : "SHOW MORE";
  }

}
