import {createAction, props} from '@ngrx/store';
import DiaryCardObject from "../../models/DiaryCardObject";

export enum AddDiaryCardActionTypes {
  ADD_DIARY_CARD = '[Add Diary Cards] Add',
  ADD_DIARY_CARD_SUCCESS='[Add Diary Cards] Success',
  ADD_DIARY_CARD_FAILURE='[Add Diary Cards] Failure'
}

export enum GetDiaryCardActionTypes {
  GET_DIARY_CARDS = '[Get Diary Cards] Get',
  GET_DIARY_CARDS_SUCCESS='[Get Diary Cards] Success',
  GET_DIARY_CARDS_FAILURE='[Get Diary Cards] Failure'
}

export const addDiaryCard = createAction(AddDiaryCardActionTypes.ADD_DIARY_CARD,   props<{
  diaryCard: DiaryCardObject
}>());

export const addDiaryCardSuccess = createAction(AddDiaryCardActionTypes.ADD_DIARY_CARD_SUCCESS);

export const addDiaryCardFailure  = createAction(AddDiaryCardActionTypes.ADD_DIARY_CARD_FAILURE,
  props<{error:Error}>()
);

export const getDiaryCards = createAction(GetDiaryCardActionTypes.GET_DIARY_CARDS);

export const getDiaryCardsSuccess = createAction(
  GetDiaryCardActionTypes.GET_DIARY_CARDS_SUCCESS,
  props<{ data: DiaryCardObject[] }>()
);

export const getDiaryCardsFailure = createAction(
  GetDiaryCardActionTypes.GET_DIARY_CARDS_FAILURE,
  props<{ error: Error }>()
);

