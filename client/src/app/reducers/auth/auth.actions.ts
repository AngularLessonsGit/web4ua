import {Action} from '@ngrx/store';

export enum authActionsType {
  show = '[AUTH] show',
  hide = '[AUTH] hide',
  login = '[AUTH] log in',
  loginSuccess = '[AUTH] log in success',
  loginError = '[AUTH] log in error',
  exit = '[AUTH] exit',
  exitSuccess = '[AUTH] exit success',
  exitCancel = '[AUTH] exit cancel',
  remindPwd = '[AUTH] remind password',
  remindPwdSuccess = '[AUTH] remind password success',
  formReset = '[AUTH] form reset',
  formResetSuccess = '[AUTH] form reset success',
  register = '[AUTH] register user',
  registerSuccess = '[AUTH] register user success',
  openLoginPage = '[AUTH] open login page',
  openRemindPage = '[AUTH] open remind page',
  openRegisterPage = '[AUTH] open register page',
}

export enum authPages {
  login = 'login',
  remind = 'remind',
  register = 'register',
}

export class AuthShowAction implements Action {
  readonly type = authActionsType.show;
}

export class AuthHideAction implements Action {
  readonly type = authActionsType.hide;
}

export class AuthLoginAction implements Action {
  readonly type = authActionsType.login;

  constructor(public payload: {
    userName: string;
    userPwd: string;
  }) {
  }
}

export class AuthLoginSuccessAction implements Action {
  readonly type = authActionsType.loginSuccess;

  constructor(public payload: {
    userName: string;
    userPwd: string;
    isAdmin?: boolean;
  }) {
  }
}

export class AuthLoginErrorAction implements Action {
  readonly type = authActionsType.loginError;
}

export class AuthExitAction implements Action {
  readonly type = authActionsType.exit;
}

export class AuthExitSuccessAction implements Action {
  readonly type = authActionsType.exitSuccess;
}

export class AuthExitCancelAction implements Action {
  readonly type = authActionsType.exitCancel;
}

export class AuthFormResetAction implements Action {
  readonly type = authActionsType.formReset;
}

export class AuthFormResetSuccessAction implements Action {
  readonly type = authActionsType.formResetSuccess;
}

export class AuthRemindPwdAction implements Action {
  readonly type = authActionsType.remindPwd;

  constructor(public payload: {
    userName: string;
    keyword: string;
  }) {
  }
}

export class AuthRemindPwdSuccessAction implements Action {
  readonly type = authActionsType.remindPwdSuccess;
}

export class AuthRegisterUserAction implements Action {
  readonly type = authActionsType.register;

  constructor(public payload: {
    userName: string;
    userPwd: string;
    keyword: string;
  }) {
  }
}

export class AuthRegisterUserErrorAction implements Action {
  readonly type = authActionsType.registerSuccess;
}

export class AuthOpenLoginPageAction implements Action {
  readonly type = authActionsType.openLoginPage;
}

export class AuthOpenRemindPageAction implements Action {
  readonly type = authActionsType.openRemindPage;
}

export class AuthOpenRegisterPageAction implements Action {
  readonly type = authActionsType.openRegisterPage;
}

export type  AuthActions = AuthShowAction | AuthHideAction | AuthLoginAction | AuthLoginSuccessAction | AuthExitAction |
  AuthFormResetAction | AuthFormResetSuccessAction | AuthExitSuccessAction | AuthLoginErrorAction | AuthExitCancelAction |
  AuthRemindPwdAction | AuthRemindPwdSuccessAction | AuthRegisterUserAction | AuthRegisterUserErrorAction | AuthOpenLoginPageAction |
  AuthOpenRemindPageAction | AuthOpenRegisterPageAction;
