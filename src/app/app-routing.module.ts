import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from 'src/app/card-module/containers/home/card-list.component';
import { DiaryCardComponent } from 'src/app/card-module/components/diary-card/diary-card.component';
import { FormComponent } from 'src/app/card-module/components/diary-form/form.component';

const routes: Routes = [
  { path: 'diary-card', component: DiaryCardComponent },
  { path: 'card-form', component: FormComponent },
  { path: 'home', component: CardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
