import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AuthExitAction, AuthLoginSuccessAction, AuthShowAction} from '../../reducers/auth/auth.actions';
import {AuthState} from '../../interfaces/auth-state';
import {Observable} from 'rxjs';
import {selectIsAdmin, selectIsLogin, selectUserName} from 'src/app/reducers/auth/auth.selectors';
import {LocalStorageService} from '../../services/local-storage.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public name$: Observable<string> = this.store$.pipe(select(selectUserName));
  public isLogin$: Observable<boolean> = this.store$.pipe(select(selectIsLogin));
  public isAdmin$: Observable<boolean> = this.store$.pipe(select(selectIsAdmin));

  showHideSubMenu = false;

  constructor(
    private store$: Store<AuthState>,
    private localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
    if (this.localStorageService.getItem('login')) {
      const user: User = {
        userName: this.localStorageService.getItem('login'),
        userPwd: this.localStorageService.getItem('password'),
        isAdmin: !!this.localStorageService.getItem('isAdmin'),
      };
      this.store$.dispatch(new AuthLoginSuccessAction(user));
    }
  }

  openAuth() {
    this.store$.dispatch(new AuthShowAction());
  }

  exit() {
    this.store$.dispatch(new AuthExitAction());
    this.showHideSubMenu = false;
  }

}
