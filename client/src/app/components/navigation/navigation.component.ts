import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../../reducers/auth/auth.reducer';
import {AuthShowAction} from '../../reducers/auth/auth.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private store$: Store<AuthState>) {
  }

  ngOnInit(): void {
  }

  openAuth() {
    this.store$.dispatch(new AuthShowAction());
  }

}
