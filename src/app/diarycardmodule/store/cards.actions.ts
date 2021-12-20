import {createAction, props} from "@ngrx/store";
import {DiaryCard} from "../models/diarycard.model";

export const addDiaryCard = createAction('[Home Page] Add Diary Card',
  props<{diarycard:DiaryCard}>()
)

export const getDiaryCards = createAction("[Home Page] Load Diary Cards");

export const getDiaryCardsSuccess = createAction("[Home Page] Load Diary Cards Success",
  props<{diarycards : DiaryCard[]}>()
);
export const getDiaryCardsFailure = createAction("[Home Page] Load Diary Cards Failure");
