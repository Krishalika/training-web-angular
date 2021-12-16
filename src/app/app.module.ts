import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';
import {LayoutModule} from "@progress/kendo-angular-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiaryHomeComponent } from './pages/diary-home/diary-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { StoreModule } from '@ngrx/store';
import { diaryCardReducer } from './state/diary-home.reducer';
import { LoginComponent } from './pages/login/login.component';
import {NavbarComponent} from "./sharepage/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    DiaryHomeComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      diaryCards: diaryCardReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
