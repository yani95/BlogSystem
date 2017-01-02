import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user-details/user.model';
import { UserService } from '../services/user.service';


@Injectable()
export class AuthenticationService implements OnInit{
  users : UserModel[];
  authenticatedUser: any;

  constructor(private userService: UserService, private _router: Router)
  {
    
  }

  ngOnInit(){
     
  }

  logIn(loggedUser: UserModel){
      this.userService.GetAll().subscribe( response => 
              {
                this.users = response;
                console.info(this.users);
                this.authenticatedUser = this.users.find(a => a.username == loggedUser.username);

                if(this.authenticatedUser && this.authenticatedUser.password == loggedUser.password){

                    localStorage.setItem("loggedUser", JSON.stringify(this.authenticatedUser));
                   
                    this._router.navigate(['articles']); 
                    return true;
                }
                return false;
                        
                }, err=>alert(err.Message));
  }

  logOut(){
      localStorage.removeItem("loggedUser");
      this._router.navigate(['login']);
  }

  checkCredentials(){
    if (localStorage.getItem("loggedUser") === null){
        this._router.navigate(['login']);
    }
  } 
}