import {createAction, props} from "@ngrx/store";

export const addDiaryCard = createAction('[Home Page] Add Diary Card',
  props<{title:string, subtitle:string, description:string}>()
)
