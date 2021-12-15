import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Post from '../models/Post';

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public form: FormGroup;
  public postArray:Post[]=[new Post('Chicker Burgers','I Love to eat them!')];
  constructor() {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }
  ngOnInit(): void {
  }


  public submitForm(): void {
    if(!this.form.get('title')?.value){
      console.log('Empty Title');
    }
    if(!this.form.get('description')?.value){
      console.log('Empty description');
    }
    else{
    this.postArray.push(new Post(this.form.get('title')?.value,this.form.get('description')?.value));
    console.log(this.form.get('title')?.value);
    console.log(this.form.get('description')?.value);
    }
    
    this.form.reset();
  }
}