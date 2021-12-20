import * as diaryCardActions from '../actions/diary-home.actions';
import { createReducer, on } from '@ngrx/store';
import DiaryCardObject from "../../models/DiaryCardObject";
import {diaryHomeState} from "../states/diary-home.state";

export const initialState: diaryHomeState = {
  diaryCards: []
};

export const diaryCardReducer = createReducer(
  initialState,
  on(diaryCardActions.addDiaryCardSuccess, (state) => ({ ...state})),
  on(diaryCardActions.getDiaryCardsSuccess, (state, props) =>({...state,diaryCards:[... props.data].sort((a,b)=>(a.created < b.created ? 1 : -1))}),
  ),
);
