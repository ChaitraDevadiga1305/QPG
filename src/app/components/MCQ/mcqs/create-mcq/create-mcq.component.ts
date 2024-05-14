import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { MCQService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-create-mcq',
  templateUrl: './create-mcq.component.html',
  styleUrls: ['./create-mcq.component.scss']
})
export class CreateMCQComponent implements OnInit {
  header:string ="Create Multiple choice Questions";
  MCQs={
    Title:'',
    Subject:'',
    Description:'Describe your creation..... ',
    Difficulty:'',
    NumberOfQuestions:'',
    TotalMarks:'',
    IsActive:true,
    Unit:'',
    CategoryId:''
  }

  catergories=[
    {
      categoryId:'',
      title:''
    }
  ]

  constructor(
    private _category: CategoryService,
    private _snack:MatSnackBar,
    private __MCQ:MCQService,
    private router: Router
  ){};

  myControl = new FormControl('');
  options: string[] = ['1', '2', '3','4','5','6','7','8','9','10'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {

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

  OnMCQSubmit(){
    if(this.MCQs.Title.trim()=='' || this.MCQs.Title==null){
      this._snack.open("Please enter Title",'OK',{duration:3000});
      return
    }
    //validations
    
    this.__MCQ.CreateMCQ(this.MCQs).subscribe(
      (data)=>{
        this._snack.open('MCQ Created successfully','ok',
        {duration:3000}),
        this.MCQs.CategoryId='',
        this.MCQs.Description='',
        this.MCQs.Difficulty='',
        this.MCQs.NumberOfQuestions='',
        this.MCQs.TotalMarks='',
        this.MCQs.Subject='',
        this.MCQs.Unit='',
        this.MCQs.Title='',
        this.router.navigate(['AddMCQQuestions'])
      },
      (error)=>{
        this._snack.open(error,'ok',{duration:3000})
      }
    )
  }

}
