import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompilerComponent } from './compiler/compiler.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [{ path: 'compiler/:id', component: CompilerComponent },
{ path: 'questionlist', component: QuestionListComponent },
{ path: 'home', component: HomePageComponent },
{ path: '**', component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CompilerComponent]