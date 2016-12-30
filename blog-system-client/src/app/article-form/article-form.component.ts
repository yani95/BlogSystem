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
        author: article.author,
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
        'author': [''],
        'category':  [String(CategoriesEnum.other)]
      });
    this.defaultForm = this.articleForm.value;
  }
  onSubmit(value: any): void {
    let ImgUrl;

    if (value.urlImg == '' || value.urlImg == null) {
      ImgUrl = 'https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg';
    }
    else {
      if (value.urlImg.startsWith("http://") || value.urlImg.startsWith("https://") || value.urlImg.startsWith("//")) {
        ImgUrl = value.urlImg;
      }
      else {
        ImgUrl = "//" + value.urlImg;
      }
    }

    let id = this.selectedArticle ? this.selectedArticle.id : 0;
    let newArticle = new ArticleModel(id, value.title, value.description, value.dateOfCreation,value.dateOfModification, ImgUrl, value.author, value.category);
    this.articleForm.reset(this.defaultForm);
    this.btnName = 'Add';
    this.SubmitChanges.emit(newArticle);
    // this.id.emit(value.id);
    console.log(value);
  }
}
