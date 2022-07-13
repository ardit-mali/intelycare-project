import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private path:string = 'http://localhost:8080/document';

  constructor(private http:HttpClient) { }

  getAllDocuments(){
    return this.http.get(this.path+'/all');
  }

  filterDocuments(search:string){
    let param = new HttpParams().append('token', search);
     return this.http.get(this.path+'/find', {params:param});
  }

  saveDocument(content:string){
    let param = new HttpParams().append('content', content)
    return this.http.post(this.path+'/create', param)
  }

  getById(id:number){
    return this.http.get(this.path +'/'+ id);
  }

  update(id:number, content:string){
    let param = new HttpParams().append('content', content);
    return this.http.put(this.path + '/update/' + id, param);
  }

  delete(id:number){
    return this.http.delete(this.path + '/delete/' +id);
  }

  query(token1:string, token2:string, token3:string){
    let param = new HttpParams().append('token1',token1).append('token2',token2).append('token3',token3);
    return this.http.get(this.path + '/query', {params:param});
}

}
