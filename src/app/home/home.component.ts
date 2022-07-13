import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";
import {catchError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  documents:any[]=[];
  search:string='';

  constructor(private service:BackendService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  getAllDocuments(){
    this.service.getAllDocuments().subscribe((res:any)=>{
      this.documents = res;
    });
  }

  filter(){
    this.service.filterDocuments(this.search).subscribe((res:any)=>{
      this.documents = res;
    });
  }

  edit(id:number) {
    sessionStorage.setItem('doc', id.toString());
    this.router.navigate(['create']);
  }

}
