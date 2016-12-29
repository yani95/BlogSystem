import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CommentModel } from './comment/comment.model';
import { ArticleModel } from './article/article.model';
import { ArticleFormComponent } from './article-form/article-form.component';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule, 
        MaterialModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        ArticlesListComponent,
        CommentComponent,
        CommentsListComponent,
        ArticleDetailsComponent,
        ArticleFormComponent,
    ],
    providers: [
       
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }