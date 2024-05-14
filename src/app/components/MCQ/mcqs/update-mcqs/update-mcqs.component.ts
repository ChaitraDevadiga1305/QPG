import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { MCQService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-update-mcqs',
  templateUrl: './update-mcqs.component.html',
  styleUrls: ['./update-mcqs.component.scss']
})
export class UpdateMCQsComponent implements OnInit {

  header:string="Update MCQ"
  mcqId:any;
  MCQ: any;

  catergories=[
    {
      categoryId:'',
      title:''
    }
  ]

  constructor(
    private _route:ActivatedRoute,
    private _mcq:MCQService,
    private _snack:MatSnackBar,
    private _category:CategoryService,
    private router:Router,

  ){}

  myControl = new FormControl('');
  options: string[] = ['1', '2', '3','4','5','6','7','8','9','10'];
  filteredOptions!: Observable<string[]>;

  ngOnInit():void{

    this.mcqId=this._route.snapshot.params['mcqId'];
    
    this._mcq.GetMCQById(this.mcqId).subscribe(
      (data:any)=>{
        this.MCQ=data;
        console.log(this.MCQ);
      },
      (error)=>{
        this._snack.open(error,'OK',{duration:3000})
      }
    )

    //for loading categories
    this._category.categories().subscribe(
      (data:any)=>{
        this.catergories=data;
        console.log(this.catergories);
      },
      (error)=>{
        console.log(error);
        this._snack.open(error,"OK",{duration:3000})
      }
    );


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  OnUpdateMCQSubmit(){
      //validations
      this._mcq.UpdateMCQ(this.mcqId,this.MCQ).subscribe(
        (data:any)=>{
        this._snack.open("Updated Successfully", "OK",{duration:3000})
        this.MCQ.CategoryId='',
        this.MCQ.Description='',
        this.MCQ.Difficulty='',
        this.MCQ.NumberOfQuestions='',
        this.MCQ.TotalMarks='',
        this.MCQ.Subject='',
        this.MCQ.Unit='',
        this.MCQ.Title='',
        this.router.navigate(['MCQs'])
      },
      (error)=>{
        this._snack.open(error,"OK",{duration:3000});
      }

    )
      
  }


}
