import { Injectable } from '@angular/core';
import { Post } from 'src/models/post.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // listOfCards: Post[] = [];

  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private angularFirestore: AngularFirestore) {
    // this.posts = this.angularFirestore.collection('posts').valueChanges();
    this.postsCollection = angularFirestore.collection<Post>('posts');
    this.posts = this.postsCollection.valueChanges({ idField: 'id' });
  }
  // constructor(private angularFirestore: AngularFirestore){
  //   this.postsCollection = this.angularFirestore.collection('posts', ref => ref.orderBy('created','desc'));

  //   this.posts = this.postsCollection.snapshotChanges().map(changes => {
  //     return changes.map(a => {
  //       const data = a.payload.doc.data() as Post;
  //      // data.id = a.payload.doc.id;
  //       return data;
  //     });
  //   });
  // }

  // getCards() {

  // }

  // addCard(card: Post): Observable<DocumentReference> {
  //   return from(this.postsCollection.add(card));
  // }

  // public getCards(): Observable<any>{
  //   return this.angularFirestore.collection('posts').valueChanges();
  // }

  // public addCard(card : Post) : void{
  //   this.angularFirestore.collection('posts').add(card).catch(()=>Error);
  // }



  public async addCard(card: Post): Promise<void> {
    await this.angularFirestore.collection('posts').add({ user: card.user, title: card.title, description: card.description, created: card.created });
  }
  public getCards() {
    return this.angularFirestore.collection('diaryCards').snapshotChanges().pipe(map((querySnapshot) => {
      return querySnapshot.map((doc) => {
        const data: any = doc.payload.doc.data();
        const diaryPost = new Post(data.user, data.title, data.description, data.created);
        return diaryPost
      });
    }))
  }

  // getCards() {
  //   return this.listOfCards;
  // }

  // addCard(card: Post) {
  //   this.listOfCards.push(card);
  // }

}
