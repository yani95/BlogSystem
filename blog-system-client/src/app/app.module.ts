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
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ArticlesControllerComponent } from './articles-controller/articles-controller.component';
import { CommentsControllerComponent } from './comments-controller/comments-controller.component';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';
import { AuthenticationService } from './services/authentication.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ArticlesFilterPipe } from './pipes/articles-filter.pipe';
import { ArticlesSortingPipe } from './pipes/articles-sorting.pipe';
import { UserLoginComponent } from './user-login/user-login.component';
import { PrivateComponent } from './private/private.component';
import { LoggedInGuard } from './logged-in.guard';
import { PublicArticlesListComponent } from './public-articles-list/public-articles-list.component';

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
        CommentFormComponent,
        ArticlesControllerComponent,
        CommentsControllerComponent,
        UserFormComponent,
        UserDetailsComponent,
        ArticlesSortingPipe,
        ArticlesFilterPipe,
        UserLoginComponent,
        PrivateComponent,
        PublicArticlesListComponent
    ],
    providers: [
       ArticleService,
       CommentService,
       UserService,
       AuthenticationService,
       LoggedInGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }