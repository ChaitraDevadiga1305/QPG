import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MCQService } from 'src/app/services/mcq.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-mcqs',
  templateUrl: './mcqs.component.html',
  styleUrls: ['./mcqs.component.scss']
})
export class MCQsComponent implements OnInit{

  header:string="All MCQs";
  categoryId:any;

  constructor(
    private _MCQ: MCQService,
    private _snack:MatSnackBar,
    private _route:ActivatedRoute,
    //private _router:Route,
  ){};

  MCQs=[
    {
      mcqId: "",
      categoryId:"",
      title:"",
      subject:"",
      description:"",
      difficulty:"",
      totalMarks:"",
      numberOfQuestions:"",
      isActive:"",
      unit:"",
      
      
    },
  ];

 

  ngOnInit(): void {

    this.categoryId=this._route.snapshot.params['categoryId'];

    //loading mcqs by category id
    this._MCQ.GetMCQByCategoryId(this.categoryId).subscribe(
      (data:any)=>{
        this.MCQs=data;
      
        //console.log(this.MCQs);
      },
      (error)=>{
        this._snack.open(error,'OK',{duration:3000})
      }
    )

    // this._MCQ.MCQs().subscribe(
    //   (data:any)=>{
    //     this.MCQs=data;
    //     console.log(this.MCQs);
    //   },
    //   (error)=>{
    //     console.log(error);
    //     this._snack.open(error,"OK",{duration:3000})
    //   }
    // )
    
  }

  DeleteMCQ(mCQId:any){
    //Use Dialog box
    this._MCQ.DeleteMCQById(mCQId).subscribe(
      (data:any)=>{
        this.MCQs=this.MCQs.filter((MCQs)=>MCQs.mcqId!=mCQId )
        this._snack.open('Deleted Successfully','OK',{duration:3000});
      },
      (error)=>{
        this._snack.open(error,'OK',{duration:3000});
      }
    )
  }

}
 