import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { MaxValidator } from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';

export interface QuestionTable {
    id : number;
    questions :string;
    answer :string;
    //diagram :string;
    unit :number;
    difficulty :string;
    marks :number;
    subject:string;
}

@Component({
  selector: 'app-question-record-table',
  templateUrl: './question-record-table.component.html',
  styleUrls: ['./question-record-table.component.scss']
})
export class QuestionRecordTableComponent implements OnInit{

  constructor(private http: HttpClient){};
  public GetQuestions:any;

  displayedColumns: string[] = ['id', 'question', 'answer', 'unit','difficulty', 'marks', 'subject','edit'];
  dataSource = new MatTableDataSource<QuestionTable>();

   //show data
   ShowData={
    
    "pageNumber": 1,            //this should bind with 
    "numberOfRecordPerPage": 5  //this should bind with items per page
    };

  ngOnInit(): void {
       this.ShowQuestions();
     }

  //pagination
  ShowQuestions(){
    this.http.post('http://localhost:5131/api/UploadFile/ReadRecord',this.ShowData).subscribe((res:any)=>{
    console.log(res.data)  
    this.GetQuestions= res.data;
    this.dataSource= res.data;
    })
  }
    
  OnPrevious(){
    this.ShowData.pageNumber-- ;
    this.ShowQuestions();
  }

  OnNext(){
    this.ShowData.pageNumber++ ;
    this.ShowQuestions();
  }
  
}
  
