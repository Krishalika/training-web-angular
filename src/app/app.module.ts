import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DiaryHomeComponent } from './components/diary-home/diary-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormFieldModule, TextAreaModule} from "@progress/kendo-angular-inputs";
import {LabelModule} from "@progress/kendo-angular-label";
import { StoreModule } from '@ngrx/store';
import {diarycardsReducer} from "./store/cards.reducer";




@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    DiaryHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    GridModule,
    ReactiveFormsModule,
    FormsModule,
    FormFieldModule,
    LabelModule,
    TextAreaModule,
    StoreModule.forRoot({diaryCards:diarycardsReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
