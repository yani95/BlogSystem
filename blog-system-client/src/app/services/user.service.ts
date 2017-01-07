import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import {API_USERS_URL} from '../Constants/Constants';
import {UserModel} from '../user-details/user.model';
import {ResponseMSG} from './response.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  GetAll(): Observable<UserModel[]> {
      return this.http.get(API_USERS_URL)
        .map(res => <UserModel[]>res.json());
  }

  GetById(id:number): Observable<UserModel> {
      return this.http.get(API_USERS_URL+"/"+id,{headers: this.headers})
      .map(res => <UserModel>res.json());
  }

  Insert(user: UserModel): Observable<ResponseMSG> {
      return this.http.post(API_USERS_URL,JSON.stringify(user),{headers: this.headers})
      .catch(err => Observable.throw(err.json()));
  }

//   Update(user: UserModel): Observable<ResponseMSG>
//   {
//       return this.http.post(API_USERS_URL,JSON.stringify(user),{headers: this.headers})
//        .catch(err => Observable.throw(err.json()));
//   }
}