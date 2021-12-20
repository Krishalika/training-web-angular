import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './diary-card-module/components/diary-card/diary-card.component';
import {LayoutModule} from "@progress/kendo-angular-layout";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiaryHomeComponent } from './diary-card-module/containers/diary-home/diary-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { StoreModule } from '@ngrx/store';
import { diaryCardReducer } from './diary-card-module/srore/reducers/diary-home.reducer';
import { LoginComponent } from './diary-card-module/containers/login/login.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {AddDiaryCardEffects} from "./diary-card-module/srore/effects/diary-home-effects/add-diary-card.effects";
import {GetDiaryCardsEffects} from "./diary-card-module/srore/effects/diary-home-effects/get-diary-cards.effects";
import { DiaryFormComponent } from './diary-card-module/components/diary-form/diary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    DiaryHomeComponent,
    LoginComponent,
    NavbarComponent,
    DiaryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    InputsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot({
      diaryCards: diaryCardReducer
    }),
    EffectsModule.forRoot([
      AddDiaryCardEffects,
      GetDiaryCardsEffects,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
