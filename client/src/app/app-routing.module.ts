import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HtmlComponent} from './components/html/html.component';
import {CssComponent} from './components/css/css.component';
import {JsComponent} from './components/js/js.component';
import {AddPostComponent} from './components/add-post/add-post.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'js', component: JsComponent},
  {path: 'add', component: AddPostComponent, canActivate: [AuthGuardService]},
  {path: '**', component: HtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
