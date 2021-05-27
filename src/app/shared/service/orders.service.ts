import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private db: AngularFirestore,
    private shoppingservice: ShoppingCartService
  ) {}

  async placeOrder(_obj: any) {
    let result = await this.db.collection('orders').add({ ..._obj });
    this.shoppingservice.clearCart();
    return result;
  }

  getOrder() {
    return this.db.collection('orders').valueChanges();
  }

  getOrderByUserId(userId: string) {
    return this.db.collection('orders').doc(userId).valueChanges();
  }
}
