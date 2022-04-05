import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/card-module/store/states/app.state';
import { Post } from 'src/app/card-module/models/post.model';
import * as CardActions from '../../store/actions/card.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  public cardForm!: FormGroup;
  index: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    let title = '';
    let description = '';

    this.cardForm = new FormGroup({
      title: new FormControl(title),
      description: new FormControl(description)
    });

  }

  public submitForm(): void {
    const title = this.cardForm.value.title;
    const description = this.cardForm.value.description;

    if (title && description) {
      console.log(title);
      console.log(description);

      const post: Post = {
        user: "Krishalika",
        title: this.cardForm.controls.title.value,
        description: this.cardForm.controls.description.value,
        created: new Date(),
      }
      this.store.dispatch(CardActions.addCard({ card: post }));
    } else {
      if (!title) {
        console.log("Missing title");
      } else if (!description) {
        console.log("Missing description");
      }
    }
    this.cardForm.markAllAsTouched();
    this.clearForm();
  }

  private clearForm(): void {
    this.cardForm.reset();
  }

}
