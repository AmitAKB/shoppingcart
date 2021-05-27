import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'shared/model/product';
// import 'rxjs/add/operator/take'

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFirestore) {}

  private create() {
    return this.db.collection('shoppingcart').add({
      created: new Date().getTime(),
    });
    // .then(res => {
    //   console.log(res.get())
    //   console.log(res.id)
    // })
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.collection('shoppingcart').doc(cartId).delete();
  }

  async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.collection('shoppingcart').doc(cartId).valueChanges();
  }

  list: any = [];
  addToCart(product: Product) {
    this.updateQuantity(product, 1);
  }

  removeToCart(product: Product) {
    this.updateQuantity(product, -1);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.collection('shoppingcart').doc(cartId).valueChanges();
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.id);

    return result.id;
  }

  updateRecord(cartId: string, list: any) {
    return this.db.collection('shoppingcart').doc(cartId).set({ items: list });
  }

  private async updateQuantity(product: Product, count: number) {
    let cartId = await this.getOrCreateCartId();
    let items = this.getItem(cartId, product.product_id);
    items.subscribe((res) => (this.list = res));
    var flag = false;
    var sendList = [];
    product.quantity = 1;
    for (
      var i = 0;
      i < (this.list && this.list.items && this.list.items.length);
      i++
    ) {
      let qty = (this.list.items[i].quantity || 0) + count;
        if (this.list.items[i].product_id == product.product_id) {
          this.list.items[i].quantity = qty;
          flag = true;
          if(qty>0)
          sendList.push(this.list.items[i]);
        } else {
          if(qty>0)
          sendList.push(this.list.items[i]);
        }
    }
    if (!flag){
      sendList.push(product);
      this.updateRecord(cartId, sendList);
    } else{
      this.updateRecord(cartId, sendList);
    }
  }
}
