import {Action, createReducer, on} from "@ngrx/store";
import {addDiaryCard} from "./cards.actions";
import {DiaryCard} from "../models/diarycard.model";

export const initialState : DiaryCard[] = [];

export const diarycardsReducer = createReducer(
  initialState,
  on(addDiaryCard, (state, newCard) => {
    const e : DiaryCard = {
      title: newCard.title,
      subtitle: newCard.subtitle,
      description: newCard.description
    }
   return [...state,e]
  })
)

