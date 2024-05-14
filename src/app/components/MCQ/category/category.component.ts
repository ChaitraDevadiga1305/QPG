import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  header:string ="All Categories";
  categories=[
    {
      categoryId:"",
      title: "",
      description:""
    },
  ];

  constructor(
      private _category:CategoryService, 
      private _snack:MatSnackBar
    ){}

  ngOnInit():void{

      //show category
      this._category.categories().subscribe(
        (data:any)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        //snackbar
        this._snack.open(error,'OK',{duration:3000})
        console.log(error)
      }
    )
  }
}
