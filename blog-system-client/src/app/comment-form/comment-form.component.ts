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
  commentForm: FormGroup;
  defaultForm: FormGroup;
  btnName: string = "Add";
  // constants = constants;

  @Output() SubmitChanges = new EventEmitter<CommentModel>();


  constructor(fb?: FormBuilder) {
    this.commentForm = fb.group
      ({
        'text': ['', Validators.compose([Validators.required])],
        ///
        
      });
    this.defaultForm = this.commentForm.value;
  }  

    onSubmit(value: any): void {
    let newComment = new CommentModel(value.id, value.text, 1, new Date(), null); // ArticleModel.id from details
    this.commentForm.reset(this.defaultForm);
    this.btnName = 'Add';
    this.SubmitChanges.emit(newComment);
  
    console.log(value);
  }
}
