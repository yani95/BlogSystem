import {Injectable} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import {Observable,Subject} from 'rxjs';
import {API_COMMENTS_URL} from '../Constants/Constants';
import {CommentModel} from '../comment/comment.model';
import {ResponseMSG} from './response.model';

import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  constructor(private http: Http) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  GetAll(): Observable<CommentModel[]> {
      return this.http.get(API_COMMENTS_URL)
        .map(res => <CommentModel[]>res.json());
  }

  Insert(comment: CommentModel):Observable<ResponseMSG> {
      return this.http.post(API_COMMENTS_URL,JSON.stringify(comment),{headers: this.headers})
      .catch(err => Observable.throw(err.json()));
  }

  Update(comment: CommentModel):Observable<ResponseMSG> {
      return this.http.post(API_COMMENTS_URL,JSON.stringify(comment),{headers: this.headers})
       .catch(err => Observable.throw(err.json()));
  }

  DeleteById(id:number):Observable<ResponseMSG> {
      return this.http.delete(API_COMMENTS_URL+"/"+id,{headers: this.headers})
       .catch(err => Observable.throw(err.json()));
  }
}
