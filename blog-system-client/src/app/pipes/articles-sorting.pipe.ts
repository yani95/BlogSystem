import { Pipe, PipeTransform } from '@angular/core';
import { ArticleModel } from '../article/article.model';

@Pipe({
    name: 'articlesSort'
})

/** The localeCompare() method returns a number indicating whether a reference string
 comes before or after or is the same as the given string in sort order. 

 Return value: A negative number if the reference string occurs before the compare string;
  positive if the reference string occurs after the compare string; 0 if they are equivalent. */

export class ArticlesSortingPipe implements PipeTransform {
    transform(articles: ArticleModel[], parameters: string[]): ArticleModel[] {
        if (!articles) {
            return [];
        }
        return articles.sort((a, b) => {
            switch (parameters[0]) {
                case 'title':
                    return parameters[1] === 'asc' ?
                        a.title.localeCompare(b.title) : 
                        b.title.localeCompare(a.title);

                // case 'author':
                //     return parameters[1] === 'asc' ?
                //         a.author.localeCompare(b.author) : 
                //         b.author.localeCompare(a.author);    

                case 'category':
                    return parameters[1] === 'asc' ?
                        +a.category - +b.category :
                        +b.category - +a.category;
            }
        });
    }
}