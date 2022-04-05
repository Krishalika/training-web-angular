import { Injectable } from '@angular/core';
import { Post } from 'src/app/card-module/models/post.model';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DiaryCardService {

  constructor(private firestore: AngularFirestore) { }
  public async addCard(diaryCard: Post): Promise<void> {
    await this.firestore.collection('posts').add({ user: diaryCard.user, title: diaryCard.title, description: diaryCard.description, created: diaryCard.created });
  }
  public getCards() {
    return this.firestore.collection('posts').snapshotChanges().pipe(map((snapshot) => {
      return snapshot.map((doc) => {
        const data: any = doc.payload.doc.data();
        const card = new Post(data.user, data.title, data.description, data.created);
        return card
      });
    }))
  }
}