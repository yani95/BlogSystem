import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from '../comment/comment.model';
import { UserModel } from '../user-details/user.model';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  @Input() value: CommentModel;
  @Output() removeComment = new EventEmitter();

  constructor() {
  }
  onCommentDelete(commentIndex: number) {
    event.stopPropagation();
    this.removeComment.emit(commentIndex);
  }
}
