import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../../reducers/auth/auth.reducer';
import {Observable} from 'rxjs';
import {selectIsShowAuth} from '../../reducers/auth/auth.selectors';
import {AuthHideAction} from '../../reducers/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public isShowAuth$: Observable<boolean> = this.store$.pipe(select(selectIsShowAuth));

  constructor(private store$: Store<AuthState>) {
  }

  ngOnInit() {
  }

  hideAuth() {
    this.store$.dispatch(new AuthHideAction());
  }

}
