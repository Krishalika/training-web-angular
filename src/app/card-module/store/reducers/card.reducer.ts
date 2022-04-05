// import { Post } from "../../models/post.model";
// import * as CardActions from '../actions/card.actions';

// export function cardReducer(state: Post[] = [],
//     action: CardActions.Actions) {
//     switch (action.type) {
//         case CardActions.ADD_CARD:
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }


import * as CardActions from '../actions/card.actions';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/card-module/models/post.model';
import { AppState } from 'src/app/card-module/store/states/app.state';

export const initialState: AppState = {
    card: []
};

export const cardReducer = createReducer(
    initialState,
    on(CardActions.addCardSuccess, (state) => ({ ...state })),
    on(CardActions.getCardsSuccess, (state, props) => ({ ...state, diaryCards: [...props.data] }),
    ),
);

