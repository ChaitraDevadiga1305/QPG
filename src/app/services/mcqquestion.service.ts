import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MCQQuestionService {

  constructor(
    private _http:HttpClient,
  ) { }

  public baseUrl: string="http://localhost:5131/api/";

  //get question by Id
  public GetMCQQuestionsById(mcqid:any){
    return this._http.get(`${this.baseUrl}MCQQuestion/${mcqid}/mcqQuestion`)
  }

  //post request
  public AddMCQQuestion(AddMCQQuestions:any){
    return this._http.post(`${this.baseUrl}MCQQuestion`,AddMCQQuestions)
  }
}
