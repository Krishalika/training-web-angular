import { Injectable } from '@angular/core';
import { Post } from 'src/models/post.model';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // listOfCards: Post[] = [];
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private angularFirestore: AngularFirestore){
    this.postsCollection = this.angularFirestore.collection('posts', ref => ref.orderBy('created','desc'));

    this.posts = this.postsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Post;
       // data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getCards() {

  }

  addCard(card: Post) {
  }

  // getCards() {
  //   return this.listOfCards;
  // }

  // addCard(card: Post) {
  //   this.listOfCards.push(card);
  // }

}
