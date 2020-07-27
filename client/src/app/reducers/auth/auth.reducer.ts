import {AuthActions, authActionsType} from './auth.actions';

export const authNode = 'auth';

export interface AuthState {
  isShowAuth: boolean;
}

const initialState: AuthState = {
  isShowAuth: false,
};

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case authActionsType.show:
      return {
        ...state,
        isShowAuth: true
      };
    case authActionsType.hide:
      return {
        ...state,
        isShowAuth: false
      };
    default:
      return state;
  }
};
