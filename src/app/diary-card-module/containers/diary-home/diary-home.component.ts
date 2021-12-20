import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import DiaryCardObject from '../../models/DiaryCardObject';
import { select, Store} from "@ngrx/store";
import * as diaryCardActions from '../../srore/actions/diary-home.actions';
import { diaryHomeState } from '../../srore/states/diary-home.state';
import { selectDiaryCards} from "../../srore/selectors/diary-home.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public diaryCardArray$: Observable<DiaryCardObject[]>  = this.store.pipe(select(selectDiaryCards))
  constructor(private store: Store<diaryHomeState>) {}

  ngOnInit(): void {
    this.store.dispatch(diaryCardActions.getDiaryCards());
  }

}
