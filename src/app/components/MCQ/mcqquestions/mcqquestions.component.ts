import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MCQQuestionService } from 'src/app/services/mcqquestion.service';

@Component({
  selector: 'app-mcqquestions',
  templateUrl: './mcqquestions.component.html',
  styleUrls: ['./mcqquestions.component.scss']
})
export class MCQQuestionsComponent implements OnInit {

  
  mcqId:any;
  title:any;
  header:any;
  MCQQuestions=[
    {
       questionId:"",
       mcqId :"",
       question:"",
       opt1:"",
       opt2:"",
       opt3 :"",
       opt4:"",
       correctAnswer :"",
       marks:"",
    }
  ];

  constructor(
    private _route:ActivatedRoute,
    private _mcqQuestion:MCQQuestionService,
    private _snackbar:MatSnackBar,
  ){}

  
  ngOnInit(): void {
    this.mcqId=this._route.snapshot.params['mcqId'];
    this.title=this._route.snapshot.params['title'];
    this.header=("MCQ Questions of "+ this.title);
    this._mcqQuestion.GetMCQQuestionsById(this.mcqId).subscribe(
      (data:any)=>{
        console.log(data)
        this.MCQQuestions=data;
      },
      (error)=>{
        this._snackbar.open(error,"Ok",{duration:3000})
        //console.log(error)
      }
    )
    console.log(this.mcqId);
    console.log(this.title)
  }
}
