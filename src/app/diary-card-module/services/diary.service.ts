import { Injectable } from '@angular/core';
import DiaryCardObject from "../models/DiaryCardObject";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private firestore:AngularFirestore) { }
  public async addDiaryCard(diaryCard: DiaryCardObject):Promise<void>{
    await this.firestore.collection('diaryCards').add({title:diaryCard.title,subtitle:diaryCard.subtitle,description:diaryCard.description, created:diaryCard.created});
  }
  public getDiaryCard(){
    return this.firestore.collection('diaryCards').snapshotChanges().pipe(map((querySnapshot) => {
      return querySnapshot.map((doc) => {
        const data:any = doc.payload.doc.data();
        const diaryCard = new DiaryCardObject(data.title,data.subtitle,data.description, data.created);
        return diaryCard
      });
    }))
  }
}
