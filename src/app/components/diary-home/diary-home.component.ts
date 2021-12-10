import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup,FormControl,Validator} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.diaryForm.markAllAsTouched();
    console.log("Title : ", this.diaryForm.controls.title.value);
    console.log("Description : ", this.diaryForm.controls.description.value);
    this.clearForm();
  }

  public clearForm(): void {
    this.diaryForm.reset();
  }
}
