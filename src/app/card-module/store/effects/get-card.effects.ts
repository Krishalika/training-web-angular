import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiaryCardService } from '../../services/card.service';
import { getCards, getCardsSuccess, getCardsFailure } from "../actions/card.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class GetDiaryCardsEffects {

    constructor(private actions$: Actions, private cardService: DiaryCardService) { }

    public getDiaryCards$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getCards),
            mergeMap(() => {
                return this.cardService.getCards().pipe(
                    map((diaryCards) => getCardsSuccess({ data: diaryCards })),
                    catchError((e) => of(getCardsFailure({ error: e })))
                );
            })
        );
    });
}