import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('',Validators.required),
      subtitle: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
  }


  submitForm() {
    console.log(this.form.get('title')?.value);
    console.log(this.form.get('subtitle')?.value);
    console.log(this.form.get('description')?.value);
    this.form.reset();
  }
}