import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  token1:string='';
  token2:string='';
  token3:string='';

  documents:any[]=[];


  constructor(private service:BackendService) { }

  ngOnInit(): void {
  }

  disableQuery(){
    return (this.token1.trim().length==0 && this.token2.trim().length==0 && this.token3.trim().length==0);
  }

  onQuery(){
    if (this.token1.includes(' ') || this.token2.includes(' ') || this.token3.includes(' ')) {
      alert("Please insert only one word per query");
    } else {
      this.service.query(this.token1, this.token2, this.token3).subscribe((res:any)=>{
        this.documents = res;
      });
    }

  }

}
