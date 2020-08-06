import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  authActionsType,
  AuthExitCancelAction,
  AuthExitSuccessAction,
  AuthFormResetAction,
  AuthHideAction,
  AuthLoginAction,
  AuthLoginErrorAction,
  AuthLoginSuccessAction, AuthOpenLoginPageAction,
  AuthRegisterUserAction,
  AuthRegisterUserErrorAction,
  AuthRemindPwdAction,
  AuthRemindPwdSuccessAction
} from './reducers/auth/auth.actions';
import {UserService} from './services/user.service';
import {ErrorService} from './services/error.service';
import {of} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './components/modal/modal.component';
import {LocalStorageService} from './services/local-storage.service';
import * as CryptoTs from 'crypto-ts';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private errorService: ErrorService,
    private modalService: NgbModal,
    private localStorageService: LocalStorageService
  ) {
  }

  @Effect()
  login$() {
    return this.actions$.pipe(
      ofType(authActionsType.login),
      switchMap((action: AuthLoginAction) => this.userService.fetchUser(action.payload)),
      switchMap(res => {
        const modalRef = this.modalService.open(ModalComponent, {backdrop: false});
        if (res.message) {
          modalRef.componentInstance.message = `${res.message}`;
          return [new AuthLoginErrorAction()];
        } else {
          modalRef.componentInstance.message = `Вітаємо дома ${res.user.userName}`;
          this.localStorageService.setItem('ad_23', JSON.stringify(res.user));
          return [
            new AuthLoginSuccessAction(res.user),
            new AuthFormResetAction(),
            new AuthHideAction()
          ];
        }
      }),
      catchError(err => of(this.errorService.handleError(err)))
    );
  }

  @Effect()
  remind$() {
    return this.actions$.pipe(
      ofType(authActionsType.remindPwd),
      switchMap((action: AuthRemindPwdAction) => this.userService.remind(action.payload)),
      map(res => {
        const modalRef = this.modalService.open(ModalComponent, {backdrop: false});
        modalRef.componentInstance.message = res.message;
        return new AuthRemindPwdSuccessAction();
      }),
      catchError(err => of(this.errorService.handleError(err)))
    );
  }

  @Effect()
  register$() {
    return this.actions$.pipe(
      ofType(authActionsType.register),
      switchMap((action: AuthRegisterUserAction) => this.userService.register(action.payload)),
      map(res => {
        const modalRef = this.modalService.open(ModalComponent, {backdrop: false});
        modalRef.componentInstance.message = res.message;
        if (res.success) {
          return new AuthOpenLoginPageAction();
        } else {
          return new AuthRegisterUserErrorAction();
        }
      }),
      catchError(err => of(this.errorService.handleError(err)))
    );
  }

  @Effect()
  exit$() {
    return this.actions$.pipe(
      ofType(authActionsType.exit),
      switchMap(() => {
        const modalRef = this.modalService.open(ModalComponent, {backdrop: false});
        modalRef.componentInstance.message = `Ви впевнені, що хочете вийти?`;
        modalRef.componentInstance.isConfirmModal = true;
        return modalRef.result;
      }),
      map((result) => {
        if (result) {
          this.localStorageService.removeItem('ad_23');
          return new AuthExitSuccessAction();
        } else {
          return new AuthExitCancelAction();
        }
      })
    );
  }
}
