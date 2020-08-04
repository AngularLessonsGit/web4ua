import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {CssComponent} from './components/css/css.component';
import {HtmlComponent} from './components/html/html.component';
import {JsComponent} from './components/js/js.component';
import {FrontendComponent} from './components/frontend/frontend.component';
import {BackendComponent} from './components/backend/backend.component';
import {environment} from '../environments/environment';
import {reducers, metaReducers} from './reducers';
import {AppEffects} from './app.effects';
import {ModalComponent} from './components/modal/modal.component';
import {MousedownStopDirective} from './directives/mousedown-stop.directive';
import {AutofocusDirective} from './directives/autofocus.directive';
import {AddPostComponent} from './components/add-post/add-post.component';

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
    ModalComponent,
    MousedownStopDirective,
    AutofocusDirective,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    NgbModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
