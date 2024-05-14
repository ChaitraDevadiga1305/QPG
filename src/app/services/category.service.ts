import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  public baseUrl: string="http://localhost:5131/api/";
  constructor(
    private _http:HttpClient,
   
  ) { }

  //load all the categories
  public categories(){
    return this._http.get(`${this.baseUrl}Category`)
  }

  //post category
  public CreateCategories(category: any){
    return this._http.post(`${this.baseUrl}Category`,category)
  }
}
