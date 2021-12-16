import {createAction, props} from '@ngrx/store';
import DiaryCardObject from "../models/DiaryCardObject";


export const addDiaryCard = createAction('[Diary Cards] Add',   props<{
  diaryCard: DiaryCardObject
}>());
