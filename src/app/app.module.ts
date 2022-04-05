import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './card-module/components/diary-card/diary-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './card-module/components/diary-form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormFieldModule, TextAreaModule } from "@progress/kendo-angular-inputs";
import { CardListComponent } from './card-module/containers/home/card-list.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'src/app/card-module/store/reducers/card.reducer';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    FormComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    TextAreaModule,
    StoreModule.forRoot({
      card: cardReducer
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    EffectsModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
