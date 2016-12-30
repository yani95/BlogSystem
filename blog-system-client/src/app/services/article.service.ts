import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import {API_ARTICLES_URL} from '../Constants/Constants';
import {ArticleModel} from '../article/article.model';
import {ResponseMSG} from './response.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService
{
  constructor(private http: Http)
  {
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  GetAll(): Observable<ArticleModel[]>
  {
      return this.http.get(API_ARTICLES_URL)
        .map(res => <ArticleModel[]>res.json());
  }

  GetById(id:number): Observable<ArticleModel>
  {
      return this.http.get(API_ARTICLES_URL+"/"+id,{headers: this.headers})
      .map(res => <ArticleModel>res.json());
  }

  Insert(article: ArticleModel): Observable<ResponseMSG>
  {
      return this.http.post(API_ARTICLES_URL,JSON.stringify(article),{headers: this.headers})
      .catch(err => Observable.throw(err.json()));
  }

  Update(article: ArticleModel): Observable<ResponseMSG>
  {
      return this.http.post(API_ARTICLES_URL,JSON.stringify(article),{headers: this.headers})
       .catch(err => Observable.throw(err.json()));
  }

  DeleteById(id:number): Observable<ResponseMSG>
  {
      return this.http.delete(API_ARTICLES_URL+"/"+id,{headers: this.headers})
       .catch(err => Observable.throw(err.json()));
  }
}


