import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from "@angular/forms";
import DiaryCardObject from "../../models/DiaryCardObject";
import {Store} from "@ngrx/store";
import {diaryHomeState} from "../../srore/states/diary-home.state";
import * as diaryCardActions from "../../srore/actions/diary-home.actions";

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.scss']
})
export class DiaryFormComponent implements OnInit {

  public form: FormGroup;
  constructor(private store: Store<diaryHomeState>) {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    })
  }

  ngOnInit(): void {}

  public submitForm():void {
    if(!this.form.get('title')?.value){
      console.log('Missing title')
    }
    else if(!this.form.get('description')?.value){
      console.log('Missing description')
    }
    else{
      let newDiaryCard: DiaryCardObject = new DiaryCardObject(this.form.get('title')?.value, "user name", this.form.get('description')?.value, new Date());
      this.store.dispatch(diaryCardActions.addDiaryCard({diaryCard: newDiaryCard}));
    }
    this.clearForm();
  }

  public clearForm(): void {
    this.form.reset();
  }
}
