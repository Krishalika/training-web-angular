import {createFeatureSelector, createSelector} from '@ngrx/store';
import {diaryHomeState} from "./diary-home.state";

export const diaryCardFeature = createFeatureSelector<diaryHomeState>('diaryCards');

export const selectDiaryCards = createSelector(
  diaryCardFeature,
  state => state.diaryCards
)

