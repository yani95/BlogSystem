import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserModel } from '../user-details/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginForm: FormGroup;
  defaultForm: FormGroup;
  users: UserModel[];
  title = 'Log in';
  public errorMsg = ''; 

  constructor(private authenticationService: AuthenticationService, fb?: FormBuilder) {
    this.loginForm = fb.group
      ({
        'username': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])]
      });
    this.defaultForm = this.loginForm.value;
  }

  onSubmit(value: any): void {

    if(!this.authenticationService.logIn(value)) {
        this.errorMsg = 'Failed to login';
    }

    console.log(value);
  }
}
