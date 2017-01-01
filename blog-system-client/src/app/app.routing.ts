import { Routes, RouterModule } from '@angular/router';
import { ArticlesControllerComponent } from './articles-controller/articles-controller.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesControllerComponent }, 
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'register', component: UserFormComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: 'articles' } 
];

export const routing = RouterModule.forRoot(routes);