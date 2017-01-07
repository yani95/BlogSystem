import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ArticleModel, CategoriesEnum } from '../article/article.model';
import { UrlValidation } from '../custom-validators/custom-validators';
import { CommentModel } from '../comment/comment.model';

@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})

export class ArticleFormComponent {

  articleForm: FormGroup;
  defaultForm: FormGroup;
  btnName: string = "Add";
  allComments: CommentModel[];
  showComments: Boolean = false;
  // allCategories : CategoriesEnum;

  user: any = JSON.parse(localStorage.getItem("loggedUser"));

  @Output() SubmitChanges = new EventEmitter<ArticleModel>();

  @Input() set selectedArticle(article: ArticleModel) {
    if (article) {
      this.showComments = true;
      this.btnName = "Edit";
      this.articleForm.setValue({
        title: article.title,
        description: article.description,
        dateOfCreation: article.dateOfCreation,
        dateOfModification: article.dateOfModification,
        picture: article.picture,
        author: article.author,
        category: String(article.category),
        comments: article.comments
      });
    }
  }

  constructor(fb?: FormBuilder) {
    this.articleForm = fb.group
      ({
        'title': ['', Validators.compose([Validators.required])],
        'description': ['', Validators.compose([Validators.required])],
        // , Validators.maxLength(500)]) constants.MAX_LENGHT_TEXT)
        'dateOfCreation': [''],
        'dateOfModification': [''],
        'picture': ['', Validators.compose([UrlValidation])],
        'author': [''],
        'category':  [String(CategoriesEnum.other)],
        'comments': [[]]
      });
    this.defaultForm = this.articleForm.value;
  }

  onSubmit(value: any): void {
    let ImgUrl;

    if (value.picture == '' || value.picture == null) {
      ImgUrl = 'http://byronbodyandsoul.com/wp-content/themes/bbs/images/no-image-available.png';
    }
    else {
      if (value.picture.startsWith("http://") || value.picture.startsWith("https://") || value.picture.startsWith("//")) {
        ImgUrl = value.picture;
      }
      else {
        ImgUrl = "//" + value.picture;
      }
    }

    let id = this.selectedArticle ? this.selectedArticle.id : 0;
    console.info(this.user );
    let newArticle = new ArticleModel(id, value.title, value.description, new Date().toLocaleString(), new Date().toLocaleString(), ImgUrl, this.user, value.category, value.comments);
    this.articleForm.reset(this.defaultForm);
    this.btnName = 'Add';
    this.SubmitChanges.emit(newArticle);
    console.log(value);
  }
}
