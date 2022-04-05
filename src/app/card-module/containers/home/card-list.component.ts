import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/card-module/models/post.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/card-module/store/states/app.state';

import * as cardActions from '../../store/actions/card.actions';
import { selectCards } from "../../store/selectors/card.selector";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public cards: Observable<Post[]> = this.store.pipe(select(selectCards))
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(cardActions.getCards());
  }

}
