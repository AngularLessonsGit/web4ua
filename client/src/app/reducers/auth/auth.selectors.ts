import {createFeatureSelector, createSelector} from '@ngrx/store';
import {authNode, AuthState} from './auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthState>(authNode);

export const selectIsShowAuth = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.isShowAuth
);
