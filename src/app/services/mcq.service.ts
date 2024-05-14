import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class MCQService {

  public baseUrl: string="http://localhost:5131/api/";

  constructor(
    private _http:HttpClient,
  ) { }

  public MCQs(){
    return this._http.get(`${this.baseUrl}MCQ/`);
  }

  public CreateMCQ(MCQs:any){
    return this._http.post(`${this.baseUrl}MCQ/`, MCQs);
  }

  public DeleteMCQById(mcqId:any){
    return this._http.delete(`${this.baseUrl}MCQ/${mcqId}`);
  }

  //get mcq by mcqid
  public GetMCQById(mcqId:any){
    return this._http.get(`${this.baseUrl}MCQ/${mcqId}`);
  }

  //get mcq by categoryId
  public GetMCQByCategoryId(categoryId:any){
    return this._http.get(`${this.baseUrl}MCQ/${categoryId}/MCQs`)
  }

  //update mcq
  public UpdateMCQ(mcqId:any,MCQ:any){
    return this._http.put(`${this.baseUrl}MCQ/${mcqId}`,MCQ);
  }
}
