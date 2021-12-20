import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DiaryCard} from "../../models/diarycard.model";
import {Store} from "@ngrx/store";
import {addDiaryCard} from "../../store/cards.actions";
import { isEmpty } from 'src/app/util/form-validations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FormComponent implements OnInit {
  public diaryForm:FormGroup = new FormGroup({
    title : new FormControl(),
    description : new FormControl(),
  })

  constructor(private store:Store<{diaryCards: DiaryCard[]}>) {
  }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.diaryForm.markAllAsTouched();

    if(isEmpty(this.diaryForm.controls.title.value)){
      console.log("Missing title");
      return;
    }
    if(isEmpty(this.diaryForm.controls.description.value)){
      console.log("Missing description");
      return;
    }

    const diarycard : DiaryCard = {
      title : this.diaryForm.controls.title.value,
      subtitle : "Dushan",
      description : this.diaryForm.controls.description.value,
      created : new Date(),
    }
    this.store.dispatch(addDiaryCard({diarycard}));

    this.clearForm();
  }

  public clearForm(): void {
    this.diaryForm.reset();
  }
}
