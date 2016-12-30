import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ArticleModel } from '../article/article.model';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent {

  @Input() articles: ArticleModel[];
  @Input() selectedArticleIndex: number;

  @Output() selectArticle = new EventEmitter<ArticleModel>();
  @Output() deleteArticle = new EventEmitter<number>();

  onEdit(article: ArticleModel)
  {
    this.selectArticle.emit(article);
  }

  onRemove(articleIndex: number)
  {
    this.deleteArticle.emit(articleIndex);
  }
}