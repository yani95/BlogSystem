import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ArticleModel, CategoriesEnum } from '../article/article.model';
// import * as constants from '../constants/constants';
import {UrlValidation} from '../custom-validators/custom-validators';


@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})

export class ArticleFormComponent {

  articleForm: FormGroup;
  defaultForm: FormGroup;
  btnName: string = "Add";
  // constants = constants;

  @Output() SubmitChanges = new EventEmitter<ArticleModel>();
  // @Output() id = new EventEmitter<ArticleModel>();

  @Input() set selectedArticle(article: ArticleModel) {
    if (article) {
      this.btnName = "Edit";
      this.articleForm.setValue({
        title: article.title,
        description: article.description,
        dateOfCreation: article.dateOfCreation,
        dateOfModification: article.dateOfModification,
        picture: article.picture,
        authorId: article.authorId,
        category: String(article.category)
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
        'authorId': [''],
        'category':  [String(CategoriesEnum.other)]
      });
    this.defaultForm = this.articleForm.value;
  }
  onSubmit(value: any): void {
    let ImgUrl;

    if (value.picture == '' || value.picture == null) {
      ImgUrl = 'https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg';
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
    let newArticle = new ArticleModel(id, value.title, value.description,new Date().toLocaleString(),new Date().toLocaleString(), ImgUrl, 1, value.category);
    this.articleForm.reset(this.defaultForm);
    this.btnName = 'Add';
    this.SubmitChanges.emit(newArticle);
    // this.id.emit(value.id);
    console.log(value);
  }
}
