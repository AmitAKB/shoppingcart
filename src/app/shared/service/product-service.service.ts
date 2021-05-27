import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private db: AngularFirestore) {}

  create(_obj: object) {
    return this.db.collection('products').add(_obj);
  }

  getAll() {
    return this.db.collection('products');
  }

  get(id: string) {
    return this.db.collection('products').doc(id).valueChanges();
  }

  update(id: string, _obj: object) {
    return this.db.collection('products').doc(id).set(_obj);
  }

  delete(id: string){
    return this.db.collection('products').doc(id).delete();
  }
}
