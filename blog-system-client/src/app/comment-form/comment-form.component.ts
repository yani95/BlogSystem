import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommentModel } from '../comment/comment.model';
import { ArticleModel } from '../article/article.model';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})

export class CommentFormComponent {

  @Input() artId: number;
  commentForm: FormGroup;
  defaultForm: FormGroup;
  btnName: string = "Add";
  user: any = JSON.parse(localStorage.getItem("loggedUser")); 

  @Output() SubmitChanges = new EventEmitter<CommentModel>();

  constructor(fb?: FormBuilder) {
    this.commentForm = fb.group
      ({
        'text': ['', Validators.compose([Validators.required])],
        'UserEntity': [''],
        'dateOfCreation': [''],
        'articleId': ['']        
      });
    this.defaultForm = this.commentForm.value;
  }  

    onSubmit(value: any): void {
      let newComment = new CommentModel(value.id, value.text, this.user, new Date().toLocaleString(), this.artId);
      this.commentForm.reset(this.defaultForm);
      this.SubmitChanges.emit(newComment);  
      console.info(this.user);
      console.log(value);
  }
}
