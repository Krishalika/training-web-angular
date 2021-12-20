import {createSelector,createFeatureSelector} from "@ngrx/store";
import {DiaryCard} from "../models/diarycard.model";
import {AppState} from "./app.state";

export const diaryCardsSelector = (state: AppState) => state.diaryCards;

export const selectDiaryCards = createSelector(
  diaryCardsSelector,
  (diaryCards : DiaryCard[]) => diaryCards
);
