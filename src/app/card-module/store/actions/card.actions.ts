import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/card-module/models/post.model';

export enum AddCardActionTypes {
    ADD_DIARY_CARD = '[Add Diary Cards] Add',
    ADD_DIARY_CARD_SUCCESS = '[Add Diary Cards] Success',
    ADD_DIARY_CARD_FAILURE = '[Add Diary Cards] Failure'
}

export enum GetCardActionTypes {
    GET_DIARY_CARDS = '[Get Diary Cards] Get',
    GET_DIARY_CARDS_SUCCESS = '[Get Diary Cards] Success',
    GET_DIARY_CARDS_FAILURE = '[Get Diary Cards] Failure'
}

export const addCard = createAction(AddCardActionTypes.ADD_DIARY_CARD, props<{
    card: Post
}>());

export const addCardSuccess = createAction(AddCardActionTypes.ADD_DIARY_CARD_SUCCESS);

export const addCardFailure = createAction(AddCardActionTypes.ADD_DIARY_CARD_FAILURE,
    props<{ error: Error }>()
);

export const getCards = createAction(GetCardActionTypes.GET_DIARY_CARDS);

export const getCardsSuccess = createAction(
    GetCardActionTypes.GET_DIARY_CARDS_SUCCESS,
    props<{ data: Post[] }>()
);

export const getCardsFailure = createAction(
    GetCardActionTypes.GET_DIARY_CARDS_FAILURE,
    props<{ error: Error }>()
);