import {ArticleModel} from '.././article/article.model';

export class UserModel {
    constructor(
        public id: number,
        public username: string,
        public password: string, 
        public firstName: string, 
        public lastName: string, 
        public isAdmin: boolean, 
        public picture: string,
        public articles: ArticleModel[] )
  {  }
}