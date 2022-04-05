import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/card-module/store/states/app.state';

export const cardFeature = createFeatureSelector<AppState>('card');

export const selectCards = createSelector(
    cardFeature,
    state => state.card
)