import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  public title :string = "Card Title";
  public subtitle :string = "Sub Title";
  public description : string = `
      The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey,
      Georgia, and Russia. It has a positive water balance; that is, a net
      outflow of water 300 km3 per year through the Bosphorus and the
      Dardanelles into the Aegean Sea.`
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
