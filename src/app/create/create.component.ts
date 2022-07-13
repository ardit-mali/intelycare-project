import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";
import {Router} from "@angular/router";
import {catchError, switchMap} from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  content:string='';
  id: number | undefined;

  constructor(private service:BackendService,
              private router:Router) { }

  ngOnDestroy(): void {
        sessionStorage.removeItem('doc');
    }

  ngOnInit(): void {
    if (sessionStorage.getItem('doc')) {
      this.id = Number(sessionStorage.getItem('doc'));
      this.service.getById(this.id).subscribe((doc:any)=>{
        this.content = doc.content;
      });
    }
  }

  disableSave(){
    return this.content.trim().length==0
  }

  onSave(){
    if (this.id){
      this.service.update(this.id, this.content).subscribe(()=>{
        this.router.navigate(['']);
      });
    } else {
      this.service.saveDocument(this.content).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  goBack() {
    this.router.navigate(['']);
  }

  onDelete(){
     // @ts-ignore
    return this.service.delete(this.id).subscribe(()=>{
      this.router.navigate(['']);
    },
      error => {
      this.router.navigate(['']);
      }
    );
  }
}
