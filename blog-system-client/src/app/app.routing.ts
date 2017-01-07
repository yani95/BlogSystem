import { Routes, RouterModule } from '@angular/router';
import { ArticlesControllerComponent } from './articles-controller/articles-controller.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PrivateComponent } from './private/private.component';
import { LoggedInGuard } from './logged-in.guard';
import { PublicArticlesListComponent } from './public-articles-list/public-articles-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'logln', pathMatch: 'full' },
  { path: 'articles', component: ArticlesControllerComponent, canActivate: [LoggedInGuard] },
  { path: 'public-articles', component: PublicArticlesListComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'register', component: UserFormComponent },
  { path: 'logln', component: PrivateComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: 'articles' }
];

export const routing = RouterModule.forRoot(routes);