import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getAll(){
    return this.db.collection('categories').valueChanges()
  }
}
