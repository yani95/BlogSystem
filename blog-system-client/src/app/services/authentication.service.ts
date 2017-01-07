import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user-details/user.model';
import { UserService } from '../services/user.service';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {
  users : UserModel[];
  authenticatedUser: any;
  private loggedIn = false;

  constructor(private userService: UserService, private _router: Router) {
    this.loggedIn = !!localStorage.getItem("loggedUser");
  }

  logIn(loggedUser: UserModel) {
      this.userService.GetAll().subscribe( response => 
              {
                this.users = response;
                console.info(this.users);
                this.authenticatedUser = this.users.find(a => a.username == loggedUser.username);

                if(this.authenticatedUser && this.authenticatedUser.password == loggedUser.password){

                    localStorage.setItem("loggedUser", JSON.stringify(this.authenticatedUser));
                   
                    this._router.navigate(['articles']); 
                    this.loggedIn = true;
                    return true;
                    
                }
                //  this.loggedIn = false;
                return false;
                        
                }, err=>alert(err.Message));
  }

  logOut() {
      localStorage.removeItem("loggedUser");
      this._router.navigate(['login']);
      this.loggedIn = false;
  }

  checkCredentials() {
    if (localStorage.getItem("loggedUser") === null){
        this._router.navigate(['login']);
    }
  }
   isLoggedIn() {
    return this.loggedIn;
  } 
}