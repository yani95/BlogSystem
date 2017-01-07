import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommentModel } from '../comment/comment.model';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})

export class CommentsListComponent {

  @Input() comments: CommentModel[];
  @Input() selectedCommentIndex: number;
  @Output() deleteComment = new EventEmitter<number>();
  
  onRemove(commentIndex: number) {
    this.deleteComment.emit(commentIndex);
  }
}