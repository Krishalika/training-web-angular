import {Action, createReducer, on} from "@ngrx/store";
import {addDiaryCard, getDiaryCardsFailure, getDiaryCardsSuccess} from "./cards.actions";
import {DiaryCard} from "../models/diarycard.model";

export const initialState : DiaryCard[] = [];

export const diarycardsReducer = createReducer(
  initialState,
  on(addDiaryCard, (state, {diarycard}) => {
   return [diarycard, ...state]
  }),
  on(getDiaryCardsSuccess, (state, {diarycards}) => {
    return [...diarycards].sort((a, b) => (a.created < b.created ? 1 : -1))
  }),
  on(getDiaryCardsFailure, state => state)
)

