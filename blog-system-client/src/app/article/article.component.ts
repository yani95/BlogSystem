import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ArticleModel } from '../article/article.model';
import { UserModel } from '../user-details/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  @Input() value: ArticleModel;
  @Output() removeArticle = new EventEmitter();

  onArticleDelete(articleIndex: number) {
    event.stopPropagation();
    this.removeArticle.emit(articleIndex);
  }
  
  onArticleDetails() {
    event.stopPropagation();
  }
}
