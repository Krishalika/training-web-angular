import { Post } from "../models/post.model";
import * as CardActions from '../actions/card.actions';

export function cardReducer(state: Post[] = [],
    action: CardActions.Actions) {
    switch (action.type) {
        case CardActions.ADD_CARD:
            return [...state, action.payload];
        default:
            return state;
    }
}

