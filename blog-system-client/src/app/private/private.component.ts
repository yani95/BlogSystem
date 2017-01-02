import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'user-login',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(
        private authenticationService: AuthenticationService){}
 
    ngOnInit(){
        this.authenticationService.checkCredentials();
    }
 
    logout() {
        this.authenticationService.logOut();
    }
}
