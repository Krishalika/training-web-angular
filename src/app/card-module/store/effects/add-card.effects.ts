import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiaryCardService } from '../../services/card.service';
import { mergeMap } from 'rxjs/operators';
import { addCard, addCardSuccess, addCardFailure } from "../actions/card.actions";

@Injectable()
export class AddDiaryCardEffects {
    constructor(private actions$: Actions, private cardService: DiaryCardService) {
    }

    public addDiaryCard$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addCard),
            mergeMap(async (action) => {
                return this.cardService.addCard(action.card).
                    then(() => addCardSuccess()).catch((e) => addCardFailure({ error: e }));
            })
        );
    });

}