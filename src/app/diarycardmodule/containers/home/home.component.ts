import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {DiaryCard} from "../../models/diarycard.model";
import {getDiaryCards} from "../../store/cards.actions";
import {Observable} from "rxjs";
import {selectDiaryCards} from "../../store/cards.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public diaryCards$ : Observable<DiaryCard[]>  = this.store.select(selectDiaryCards);

  constructor(private store:Store<{diaryCards: DiaryCard[]}>) { }

  ngOnInit(): void {
    this.store.dispatch(getDiaryCards());
  }

}
