import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryHomeComponent} from "./diary-card-module/containers/diary-home/diary-home.component";
import {LoginComponent} from "./diary-card-module/containers/login/login.component";

const routes: Routes = [
  {path:'', component:DiaryHomeComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
