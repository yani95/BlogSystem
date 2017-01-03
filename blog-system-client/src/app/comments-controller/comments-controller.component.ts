import { Component, Input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { CommentModel } from '../comment/comment.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'comments-controller',
  templateUrl: './comments-controller.component.html',
  styleUrls: ['./comments-controller.component.css']
})

export class CommentsControllerComponent {

  @Input() comments: CommentModel[];
  @Input() arId: number;

  selectedComment: CommentModel;
  selectedCommentIndex: number;
  title = 'Add comment';

  onChangesSubmitted(newComment: CommentModel)
  {
      this.commentService.Insert(newComment).subscribe(()=>this.ReloadComments(),err=>alert(err.Message));
  }

  constructor(private commentService: CommentService) {
    this.ReloadComments();
  }

  ReloadComments(){
     this.commentService.GetAll()
        .subscribe(
          response => {
            this.comments = response;
            this.comments = this.comments.filter(c => c.articleId == this.arId);
          },
          error => console.error(error)
        );
  }

  onCommentDelete(commentIndex: number)
  {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.commentService.DeleteById(commentIndex)
          .subscribe(()=>this.ReloadComments(),err=>alert(err.Message));
      }
  }
}