import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from '../comment/comment.model';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  @Input() value: CommentModel;
  @Output() removeComment = new EventEmitter();

  onCommentDelete(commentIndex: number) {
    event.stopPropagation();
    this.removeComment.emit(commentIndex);
  }
}
