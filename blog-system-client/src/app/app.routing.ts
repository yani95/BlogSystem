import { Routes, RouterModule } from '@angular/router';
import { ArticlesControllerComponent } from './articles-controller/articles-controller.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesControllerComponent }, 
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '**', redirectTo: 'articles' } 
];

export const routing = RouterModule.forRoot(routes);