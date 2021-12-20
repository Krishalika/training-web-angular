import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DiaryCardService} from "../services/diary-card.service";
import {catchError, concatMap, exhaustMap, map, mergeMap, tap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {addDiaryCard, getDiaryCards, getDiaryCardsSuccess} from "./cards.actions";

@Injectable()
export class DiaryCardEffect {
  constructor(
    private actions$ : Actions,
    private diaryCardService : DiaryCardService
    ) {
  }

  loadDiaryCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDiaryCards),
      exhaustMap(() => this.diaryCardService.getDiaryCards().pipe(
        map((diarycards) => getDiaryCardsSuccess({diarycards})),
        catchError(() => EMPTY)
      ))
    )
  );

  addDiaryCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDiaryCard),
      tap(({diarycard}) => this.diaryCardService.addDiaryCard(diarycard)),
      ),{ dispatch: false }
  );

}
