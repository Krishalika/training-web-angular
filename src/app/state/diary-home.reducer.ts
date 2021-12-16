import * as diaryCardActions from './diary-home.actions';
import { createReducer, on } from '@ngrx/store';
import DiaryCardObject from "../models/DiaryCardObject";
import {diaryHomeState} from "./diary-home.state";

export const initialState: diaryHomeState = {
  diaryCards: [new DiaryCardObject('Test title', 'user name', 'test description')]
};

export const diaryCardReducer = createReducer(
  initialState,
  on(diaryCardActions.addDiaryCard, (state,props) => {
    return {
      ...state,
      diaryCards: [...state.diaryCards, props.diaryCard]
    };
  }),
);
