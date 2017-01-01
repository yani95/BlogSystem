import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { ArticleModel } from '../article/article.model';

@Pipe({
    name: 'articlesFilter'    
})

@Injectable()
export class ArticlesFilterPipe implements PipeTransform {
    transform(articles: ArticleModel[], filterValue: string): ArticleModel[] {
        if(!filterValue) {
            return articles;
        }
        return articles.filter(item => item.title.toLowerCase()
        .indexOf(filterValue.toLowerCase()) > -1);        
    }
}