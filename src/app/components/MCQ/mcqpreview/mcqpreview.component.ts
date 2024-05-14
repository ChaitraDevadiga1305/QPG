import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MCQQuestionService } from 'src/app/services/mcqquestion.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-mcqpreview',
  templateUrl: './mcqpreview.component.html',
  styleUrls: ['./mcqpreview.component.scss']
})
export class MCQPreviewComponent {

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
    this.header=("Preview the Questions and Add Instructions ");
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

  OnGeneratePDF(){
    const content:any =document.getElementById('ContentToPDF');
    html2canvas(content, {scale:2}).then(canvas =>{
      const pdf = new jsPDF('p','mm','a4');
      const imgData=canvas.toDataURL('image/png');
      const imgWidth=190;
      const imgHeight = (canvas.height*imgWidth)/canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('Converted.pdf')
    });
  }
}


