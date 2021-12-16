import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import DiaryCardObject from '../../models/DiaryCardObject';
import { select, Store} from "@ngrx/store";
import * as diaryCardActions from './../../state/diary-home.actions';
import { diaryHomeState } from '../../state/diary-home.state';
import { selectDiaryCards} from "../../state/diary-home.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public form: FormGroup;
  public diaryCardArray$: Observable<DiaryCardObject[]>  = this.store.pipe(select(selectDiaryCards))
  constructor(private store: Store<diaryHomeState>) {
    this.form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })
    console.log(this.diaryCardArray$)
  }

  ngOnInit(): void {
  }

  public submitForm():void {
    if(!this.form.get('title')?.value){
      console.log('Missing title')
    }
    else if(!this.form.get('description')?.value){
      console.log('Missing description')
    }
    else{
      let newDiaryCard: DiaryCardObject = new DiaryCardObject(this.form.get('title')?.value, "user name", this.form.get('description')?.value);
      this.store.dispatch(diaryCardActions.addDiaryCard({diaryCard: newDiaryCard}));
    }
    this.clearForm();
  }

  public clearForm(): void {
    this.form.reset();
  }
}
