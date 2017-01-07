import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserModel } from '../user-details/user.model';
import { UrlValidation } from '../custom-validators/custom-validators';
import { UserService } from '../services/user.service';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm: FormGroup;
  defaultForm: FormGroup;
  users: UserModel[];
  title = 'Register';
  
  // @Output() SubmitChanges = new EventEmitter<UserModel>();

  // @Input() set selectedUser(user: UserModel) {
  //   if (user) {
  //     this.userForm.setValue({
  //       username: user.username,
  //       password: user.password,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       isAdmin: user.isAdmin,
  //       picture: user.picture,
  //       articles: user.articles
  //     });
  //   }
  // }

  constructor(private userService: UserService, fb?: FormBuilder) {
    this.userForm = fb.group
      ({
        'username': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])],
        'firstName': ['', Validators.compose([Validators.required])],
        'lastName': ['', Validators.compose([Validators.required])],
        'isAdmin': [false],
        'picture': ['', Validators.compose([UrlValidation])],
        'articles': [[]]
      });
    this.defaultForm = this.userForm.value;
  }

  onSubmit(value: any): void {
    let ImgUrl;

    if (value.picture == '' || value.picture == null) {
      ImgUrl = 'http://i.imgur.com/HQ3YU7n.gif';
    }
    else {
      if (value.picture.startsWith("http://") || value.picture.startsWith("https://") || value.picture.startsWith("//")) {
        ImgUrl = value.picture;
      }
      else {
        ImgUrl = "//" + value.picture;
      }
    }

    // let id = this.selectedUser ? this.selectedUser.id : 0;
    let newUser = new UserModel(value.id, value.username, value.password, value.firstName, value.lastName, false, ImgUrl, value.articles);
   
    this.userService.Insert(newUser).subscribe( ()=>this.ReloadUsers(), err=>alert(err.Message));
    this.userForm.reset(this.defaultForm);

    // this.id.emit(value.id);
    console.log(value);
  }
  ReloadUsers(){
     this.userService.GetAll()
        .subscribe(
          response => {
            this.users = response;
          },
          error => console.error(error)
        );
  }
}
