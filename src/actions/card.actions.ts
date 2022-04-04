import { Action } from "@ngrx/store";
import { Post } from '../models/post.model';

export const ADD_CARD = "[CARD] Add"

export class AddCard implements Action {
    readonly type = ADD_CARD

    constructor(public payload: Post) { }
}

export type Actions = AddCard

