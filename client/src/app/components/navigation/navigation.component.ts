import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AuthExitAction, AuthLoginSuccessAction, AuthShowAction} from '../../reducers/auth/auth.actions';
import {AuthState} from '../../interfaces/auth-state';
import {Observable} from 'rxjs';
import {selectIsAdmin, selectIsLogin, selectUserName} from 'src/app/reducers/auth/auth.selectors';
import {LocalStorageService} from '../../services/local-storage.service';

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
    const user = this.localStorageService.getItem('ad_23');
    if (user) {
      this.store$.dispatch(new AuthLoginSuccessAction(JSON.parse(user)));
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
