import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {CssComponent} from './components/css/css.component';
import {HtmlComponent} from './components/html/html.component';
import {JsComponent} from './components/js/js.component';
import {FrontendComponent} from './components/frontend/frontend.component';
import {BackendComponent} from './components/backend/backend.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {reducers, metaReducers} from './reducers';
import {AppEffects} from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavigationComponent,
    CssComponent,
    HtmlComponent,
    JsComponent,
    FrontendComponent,
    BackendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
