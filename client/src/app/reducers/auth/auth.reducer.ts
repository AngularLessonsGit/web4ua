import {AuthActions, authActionsType, authPages} from './auth.actions';
import {AuthState} from '../../interfaces/auth-state';

export const authNode = 'auth';

const initialState: AuthState = {
  isShowAuth: false,
  isLogin: false,
  userName: '',
  userPwd: '',
  isAdmin: false,
  formReset: false,
  currentPage: authPages.login,
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
    case authActionsType.loginSuccess:
      return {
        ...state,
        isLogin: true,
        userName: action.payload.userName,
        userPwd: action.payload.userPwd,
        isAdmin: action.payload.isAdmin,
      };
    case authActionsType.exitSuccess:
      return {
        ...state,
        isLogin: false,
        userName: '',
        userPwd: '',
        isAdmin: false,
      };
    case authActionsType.formReset:
      return {
        ...state,
        formReset: true
      };
    case authActionsType.formResetSuccess:
      return {
        ...state,
        formReset: false
      };
    case authActionsType.openLoginPage:
      return {
        ...state,
        currentPage: authPages.login,
      };
    case authActionsType.openRegisterPage:
      return {
        ...state,
        currentPage: authPages.register,
      };
    case authActionsType.openRemindPage:
      return {
        ...state,
        currentPage: authPages.remind,
      };
    default:
      return state;
  }
};
