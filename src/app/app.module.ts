import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './AppModules/material/material.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { OptionsComponent } from './components/options/options.component';
import { AddquestionsComponent } from './components/addquestions/addquestions.component';
import { CreateQPComponent } from './components/create-qp/create-qp.component';
import { AuthGuard } from './guards/auth.guard';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { QuestionRecordTableComponent } from './components/question-record-table/question-record-table.component';
import { SubjectiveQuestionsComponent } from './components/subjective-questions/subjective-questions.component';
import { CategoryComponent } from './components/MCQ/category/category.component';
import { MCQsComponent } from './components/MCQ/mcqs/mcqs.component';
import { MCQQuestionsComponent } from './components/MCQ/mcqquestions/mcqquestions.component';
import { CreateCategoryComponent } from './components/MCQ/category/create-category/create-category.component';
import { CreateMCQComponent } from './components/MCQ/mcqs/create-mcq/create-mcq.component';
import { CreateMCQQuestionsComponent } from './components/MCQ/mcqquestions/create-mcqquestions/create-mcqquestions.component';
import { UpdateMCQsComponent } from './components/MCQ/mcqs/update-mcqs/update-mcqs.component';
import { MCQPreviewComponent } from './components/MCQ/mcqpreview/mcqpreview.component';


const appRoute: Routes = [
  { path: "", redirectTo: 'Home', pathMatch: 'full' },
  { path: "Login", component: LoginComponent },
  { path: "SignUp", component: SignupComponent },
  { path: "Home", component: MaincontentComponent },
  { path: "UserPage", component: UserpageComponent, canActivate: [AuthGuard] },
  { path: "Options", component: OptionsComponent },
  { path: "AddQuestions", component: AddquestionsComponent },
  { path: "CreateQuestionPaper", component: CreateQPComponent },
  { path: "Toolbar", component: ToolbarComponent },
  { path: "Category", component: CategoryComponent  },          //view category
  { path: "MCQs/:categoryId", component: MCQsComponent },                   //view MCQs
  { path: "ViewMCQQuestions/:mcqId/:title", component: MCQQuestionsComponent },   //view MCQQuestions
  { path: "AddCategory", component: CreateCategoryComponent},   //create category
  { path: "AddMCQ", component:CreateMCQComponent},               //create MCQ
  { path: "AddMCQQuestions/:mcqId",component:CreateMCQQuestionsComponent}, //create MCQ Questions
  { path: "UpdateMCQ/:mcqId", component:UpdateMCQsComponent} ,         //Update MCQ
  { path: "MCQPreview/:mcqId", component:MCQPreviewComponent},
  {path : "AddSQs", component:SubjectiveQuestionsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    MaincontentComponent,
    SignupComponent,
    UserpageComponent,
    OptionsComponent,
    AddquestionsComponent,
    CreateQPComponent,
    ToolbarComponent,
    AdminpageComponent,
    QuestionRecordTableComponent,
    SubjectiveQuestionsComponent,
    CategoryComponent,
    MCQsComponent,
    MCQQuestionsComponent,
    CreateCategoryComponent,
    CreateMCQComponent,
    CreateMCQQuestionsComponent,
    UpdateMCQsComponent,
    MCQPreviewComponent,
  ],
  imports: [

    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
