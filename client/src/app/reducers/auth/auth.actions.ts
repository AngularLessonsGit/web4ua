import {Action} from '@ngrx/store';

export enum authActionsType {
  show = '[AUTH] show',
  hide = '[AUTH] hide',
}

export class AuthShowAction implements  Action {
  readonly type = authActionsType.show;
}

export class AuthHideAction implements  Action {
  readonly type = authActionsType.hide;
}

export type  AuthActions = AuthShowAction | AuthHideAction;
