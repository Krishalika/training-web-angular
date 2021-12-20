import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DiaryService} from "../../../services/diary.service";
import {getDiaryCards, getDiaryCardsSuccess, getDiaryCardsFailure} from "../../actions/diary-home.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class GetDiaryCardsEffects {

  constructor(private actions$: Actions,private diaryService:DiaryService) {}

  public getDiaryCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getDiaryCards),
      mergeMap(() => {
        return this.diaryService.getDiaryCard().pipe(
          map((diaryCards) => getDiaryCardsSuccess({ data:diaryCards })),
          catchError((e) => of(getDiaryCardsFailure({ error: e})))
        );
      })
    );
  });
}
