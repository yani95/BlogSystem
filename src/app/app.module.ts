import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        ArticlesListComponent,
        CommentComponent,
        CommentsListComponent,
        ArticleDetailsComponent,       
    ],
    providers: [
       
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }