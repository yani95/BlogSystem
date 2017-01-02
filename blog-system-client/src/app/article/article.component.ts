import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ArticleModel } from '../article/article.model';
import { UserModel } from '../user-details/user.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit{
  @Input() value: ArticleModel;
  @Output() removeArticle = new EventEmitter();
  @Input() author: UserModel;

  onArticleDelete(articleIndex: number) {
    event.stopPropagation();
    this.removeArticle.emit(articleIndex);
  }
  
  onArticleDetails() {
    event.stopPropagation();
  }

  ngOnInit(){
      // this.userService.GetById(this.value.authorId)
      //     .subscribe((response:any) => {            
      //       this.author = response;
      //       console.info(this.author.username);
      //     });
      //     console.info(this.value.authorId);  
  }

  constructor(private userService: UserService){
  }
}
