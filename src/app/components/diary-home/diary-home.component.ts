import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup,FormControl,Validator} from "@angular/forms";
import {Store} from "@ngrx/store";
import {selectDiaryCards} from "../../store/cards.selectors";
import {Observable} from "rxjs";
import {addDiaryCard} from "../../store/cards.actions";
import {DiaryCard} from "../../models/diarycard.model";


@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DiaryHomeComponent implements OnInit {

  public diaryForm:FormGroup = new FormGroup({
    title : new FormControl(),
    description : new FormControl(),
  })

  public diaryCards$ : Observable<DiaryCard[]>  = this.store.select(selectDiaryCards);

  constructor(private store:Store<{diaryCards: DiaryCard[]}>) {
  }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.diaryForm.markAllAsTouched();

    if(this.isEmpty(this.diaryForm.controls.title.value)){
      console.log("Missing title");
      return;
    }
    if(this.isEmpty(this.diaryForm.controls.description.value)){
      console.log("Missing description");
      return;
    }

    this.store.dispatch(addDiaryCard({
      title : this.diaryForm.controls.title.value,
      subtitle : "Dushan",
      description : this.diaryForm.controls.description.value
    }))

    this.clearForm();
  }

  public clearForm(): void {
    this.diaryForm.reset();
  }

  private isEmpty(str:string):boolean{
    return (str === undefined || str == null || str.trim().length <= 0);
  }
}
