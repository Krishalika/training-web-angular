import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {DiaryCard} from "../models/diarycard.model";


@Injectable({
  providedIn: 'root'
})
export class DiaryCardService {

  constructor(private firestore : AngularFirestore) {
  }

  public getDiaryCards(): Observable<any>{
    return this.firestore.collection('posts').valueChanges();
  }

  public addDiaryCard(card : DiaryCard) : void{
    this.firestore.collection('posts').add(card).catch(()=>Error);
  }
}
