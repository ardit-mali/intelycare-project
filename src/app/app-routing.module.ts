import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { QueryComponent } from "./query/query.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'create', component:CreateComponent},
  {path:'query', component:QueryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
