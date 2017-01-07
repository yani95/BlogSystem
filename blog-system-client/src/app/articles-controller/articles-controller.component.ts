import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleModel } from '../article/article.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'articles-controller',
  templateUrl: './articles-controller.component.html',
  styleUrls: ['./articles-controller.component.css']
})

export class ArticlesControllerComponent {

  articles: ArticleModel[];
  selectedArticle: ArticleModel;
  selectedArticleIndex: number;
  title = 'Articles';
  user: any = JSON.parse(localStorage.getItem("loggedUser"));

  onChangesSubmitted(newArticle: ArticleModel) {
      if(this.selectedArticle)
      {
          newArticle.id = this.selectedArticle.id;
          this.selectedArticle = null;
          this.selectedArticleIndex = 0;
          this.articleService.Update(newArticle).subscribe(()=>this.ReloadArticles(),err=>alert(err.Message));
      }
      else
      {
          this.articleService.Insert(newArticle).subscribe(()=>this.ReloadArticles(),err=>alert(err.Message));
      }
  }

  constructor(private articleService: ArticleService) {
    this.ReloadArticles();
  }

  ReloadArticles() {
    this.articleService.GetAll()
      .subscribe(
        response => {            
          this.articles = response.filter(c => c.author.username == this.user.username);
        },
        error => console.error(error)
      );
  }

  onArticleSelected(article: ArticleModel) {
    this.selectedArticleIndex = this.articles.findIndex(a=>a.id == article.id)+1;
    this.selectedArticle = article;
  }

  onArticleDelete(articleIndex: number) {
    if (confirm('Are you sure you want to delete this article?')) {
      this.articleService.DeleteById(articleIndex)
        .subscribe(()=>this.ReloadArticles(),err=>alert(err.Message));
    }
  }
}