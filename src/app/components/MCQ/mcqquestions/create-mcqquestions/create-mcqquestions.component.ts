import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MCQQuestionService } from 'src/app/services/mcqquestion.service';

@Component({
  selector: 'app-create-mcqquestions',
  templateUrl: './create-mcqquestions.component.html',
  styleUrls: ['./create-mcqquestions.component.scss']
})
export class CreateMCQQuestionsComponent implements OnInit {

  header:string ="Adding new Question";
  mcqId:any;
  AddMCQQuestions={
    MCQId:"",
    Question:"",
    Opt1:"",
    Opt2:"",
    Opt3:"",
    Opt4:"",
    CorrectAnswer:"",
    Marks:"",
  };

  constructor(
    private _route: ActivatedRoute,
    private _MCQQuestion:MCQQuestionService,
    private _snackbar:MatSnackBar,
    private router:Router,
  ){}

  ngOnInit(): void {
    this.mcqId=this._route.snapshot.params['mcqId'];
    //console.log(this.mcqId)
    this.AddMCQQuestions.MCQId=this.mcqId
  }

  OnAddMCQQuestionSubmit(){
    if(this.AddMCQQuestions.Question.trim()=='' || this.AddMCQQuestions.Question==null){
      this._snackbar.open("Please Fill required fields")
    }

    this._MCQQuestion.AddMCQQuestion(this.AddMCQQuestions).subscribe(
      (data)=>{
        this._snackbar.open("Question added successfully","Ok",{duration:300})
        this.AddMCQQuestions.Question='',
        this.AddMCQQuestions.Opt1='',
        this.AddMCQQuestions.Opt2='',
        this.AddMCQQuestions.Opt3='',
        this.AddMCQQuestions.Opt4='',
        this.AddMCQQuestions.CorrectAnswer='',
        this.AddMCQQuestions.Marks='',
        //this.router.navigate(['ViewMCQQuestions'])
        this._snackbar.open("Add more Questions","Ok",{duration:3000})

      },
      (error)=>{
        this._snackbar.open(error,"Ok",{duration:3000})
      }
    )
  }

  
  

}
