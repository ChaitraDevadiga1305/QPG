import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.scss'],

})
export class AddquestionsComponent {
  FileUploadUrl=("http://localhost:5131/api/UploadFile/UploadExcelFile");

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
 

  constructor(private _formBuilder: FormBuilder,
              private _http :HttpClient,
              private _snackBar: MatSnackBar,) { }

  //click to download tempate.
  //adding contents in template.
  MCQS: any = [
    {
      id: "",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct_Answer: "",
     // Diagram: "",
      unit: "",
      Difficulty: "",
      Marks: "",
      Subject: "",
    }
  ]

  array: any = [];
  templateMCQ() {
    for (let i = 0; i < this.MCQS.length; i++) {
      var o;
      var newArray: any = [];
      for (o in this.MCQS[i]) {
        newArray.push(o);
      }
      break;
    }
    this.array.push(newArray);
    for (let i = 0; i < this.MCQS.length; i++) {
      this.array.push(Object.values(this.MCQS[i]))
    }
    var CsvString = "";
    this.array.forEach((RowItem: any, RowIndex: any) => {
      RowItem.forEach((colItem: any, colIndex: any) => {
        CsvString += colItem + ',';

      })
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv, " + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString);
    x.setAttribute("download", "template.csv");
    document.body.appendChild(x);
    x.click();
    this.array = [];
  }

  SQs: any = [
    {
      id: "",
      question: "",
      answer: "",
     // Diagram: "",
      unit: "",
      Difficulty: "",
      Marks: "",
      Subject: "",
    }
  ]

  templateSQ() {
    for (let i = 0; i < this.SQs.length; i++) {
      var o;
      var newArray: any = [];
      for (o in this.SQs[i]) {
        newArray.push(o);
      }
      break;
    }
    this.array.push(newArray);
    for (let i = 0; i < this.SQs.length; i++) {
      this.array.push(Object.values(this.SQs[i]))
    }
    var CsvString = "";
    this.array.forEach((RowItem: any, RowIndex: any) => {
      RowItem.forEach((colItem: any, colIndex: any) => {
        CsvString += colItem + ',';

      })
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv, " + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString);
    x.setAttribute("download", "template.csv");
    document.body.appendChild(x);
    x.click();
    this.array = [];
  }

//Select file
  File:any;
  SelectFile(event:any){
    this.File= event.target.files[0]
    console.log(this.File)

  }
//to upload File
  UploadFile(){
    let formData=new FormData()
    formData.append("File",this.File);

    this._http.post(this.FileUploadUrl,formData).subscribe(
    (data)=>{
        console.log(data)
        this._snackBar.open("Uploaded successfully", "OK", {
          duration: 10000
        });
        
    },
    (error) => {
       ((err: any) => {
        this._snackBar.open(err.error.message, "OK", {
          duration: 10000
        });
      })
    }
    );
  }

}

