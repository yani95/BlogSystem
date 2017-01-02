import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'user-login',
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit, OnChanges {

    user: any = JSON.parse(localStorage.getItem("loggedUser"));
    constructor(
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.checkCredentials();
    }

    ngOnChanges() {
        console.log(localStorage.getItem("loggedUser"));
    }

    logout() {
        this.authenticationService.logOut();
    }
}
