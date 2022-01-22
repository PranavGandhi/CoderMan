import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompilerComponent } from './compiler/compiler.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FilterPipe } from './Pipes/filter.pipe';
import { SpinnersAngularModule } from 'spinners-angular';
@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent,
    QuestionsComponent,
    QuestionListComponent,
    HomePageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SpinnersAngularModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
