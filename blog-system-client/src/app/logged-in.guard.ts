import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UserModel } from './user-details/user.model';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate() {
    return this.authenticationService.isLoggedIn();
  }
}