import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IBulkUpload } from '../interface/bulkupload';

@Injectable({
  providedIn: 'root'
})
export class QuestionStoreService {
  ApiUrl= "http://localhost:5131";
  http=inject(HttpClient);
  constructor() { }

  getAllQuestions(){
    return this.http.get<IBulkUpload[]>(this.ApiUrl+"/api/UploadFile/ReadRecord")
  }
}
