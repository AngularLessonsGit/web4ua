import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HtmlComponent} from './components/html/html.component';
import {CssComponent} from './components/css/css.component';
import {JsComponent} from './components/js/js.component';
import {FrontendComponent} from './components/frontend/frontend.component';
import {BackendComponent} from './components/backend/backend.component';

const routes: Routes = [
  {path: '', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'js', component: JsComponent},
  {path: 'frontend', component: FrontendComponent},
  {path: 'backend', component: BackendComponent},
  {path: '**', component: HtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
