import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleModel } from '../article/article.model';
import { ArticleService } from '../services/article.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  encapsulation: ViewEncapsulation.Native
})

export class ArticleDetailsComponent {
 @Input() article: ArticleModel;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {
    this.ReloadArticles();
  }

  ReloadArticles() {
    this.route.params
    .switchMap((params: Params) => this.articleService.GetById(+params['id']))
    .subscribe(
      article => {
        this.article = article;
        console.info(article.comments);
      },
      error => console.error(error)
      );

  }

  goToArticles() {
    let articleId = this.article ? this.article.id : null;
    this.router.navigate(['/articles']);
  }
}
