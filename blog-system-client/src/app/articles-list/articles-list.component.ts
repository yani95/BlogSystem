import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ArticleModel } from '../article/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent {
  
  filterText: string;
  sortingProperties: string[];
  sortingProperty: string;
  order: string;
  user: any = JSON.parse(localStorage.getItem("loggedUser")); 

  constructor(private articleService: ArticleService) { }

  ngOnInit() {          
      this.sortingProperties = ['category', 'title'];
      this.sortingProperty = 'title';
      this.order = 'desc';
      this.articleService.GetAll()
        .subscribe(
          response => {            
            this.articles = response.filter(c => c.author.username == this.user.username);
          },
          error => console.error(error)
        );
  }

  onFilterInput(e: any) {
      this.filterText = e.target.value;
  }

  onSortChange(e: any) {
      this.sortingProperty = e.target.value;
  }

  onOrderChange(e: any) {
      this.order = e.target.value;
  }

  @Input() articles: ArticleModel[];
  @Input() selectedArticleIndex: number;

  @Output() selectArticle = new EventEmitter<ArticleModel>();
  @Output() deleteArticle = new EventEmitter<number>();

  onEdit(article: ArticleModel) {
    this.selectArticle.emit(article);
  }

  onRemove(articleIndex: number) {
    this.deleteArticle.emit(articleIndex);
  }  
}