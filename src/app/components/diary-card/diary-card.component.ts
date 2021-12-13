import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  @Input()
  public title :string = '';
  @Input()
  public subtitle :string = '';
  @Input()
  public description : string = '';

  public cardColor:string = "#B9E9FF"
  public isShowMore = false;

  constructor() { }

  ngOnInit(): void {

  }

  public toggleShowMore(): void {
    this.isShowMore = !this.isShowMore;
  }

  public getDescription():string{
    if(this.description.length>100){
      if(this.isShowMore) return this.description;
      else return this.description.substr(0,100).concat("...")
    }
    else {
      return this.description;
    }
  }
}
