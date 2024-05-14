import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  header:string ="Create Category";
  // registerForm!: FormGroup;
  // fields:any= [];
  category = {
        Title: '',
        Description: '',
  };
  // formData: any;

  constructor(
    private router: Router,
    private _category:CategoryService,
    private _snack: MatSnackBar
  ){}

  ngOnInit() {
    
  }


  OnCategorySubmit(){
    if(this.category.Title.trim()==''|| this.category.Title==null){
      this._snack.open('Please enter the Title ','Ok',{
        duration:3000, 
        
      });
      return;
    }

    this._category.CreateCategories(this.category).subscribe(
      (data: any)=>{
        this.category.Title="";
        this.category.Description=""
        this._snack.open('Created', 'Ok',{duration:3000})
        this.router.navigate(['Category'])
      },
      (error)=>{
        console.log(error);
        this._snack.open(error,'Ok',{
          duration:3000, 
        });
      }
    )
  }
    
}
