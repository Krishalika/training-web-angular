import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiaryService } from "../../../services/diary.service";
import { mergeMap } from 'rxjs/operators';
import {addDiaryCard, addDiaryCardSuccess, addDiaryCardFailure} from "../../actions/diary-home.actions";

@Injectable()
export class AddDiaryCardEffects {
  constructor(private actions$: Actions,private diaryService:DiaryService) {
  }

  public addDiaryCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addDiaryCard),
      mergeMap(async (action) => {
        return this.diaryService.addDiaryCard(action.diaryCard).then(()=>addDiaryCardSuccess()).catch((e)=>addDiaryCardFailure({error:e}));
      })
    );
  });

}
