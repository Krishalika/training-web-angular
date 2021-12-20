import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private route:Router) {
    this.form = new FormGroup({
      name: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }
  public login():void {
    console.log(this.form.get('name')?.value)
    this.route.navigate(['']);
  }
}
