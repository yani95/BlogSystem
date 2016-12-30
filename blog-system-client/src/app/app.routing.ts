import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesListComponent }, 
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '**', redirectTo: '' } 
];

export const routing = RouterModule.forRoot(routes);