import { Component, Input } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';

@Component({
  selector: 'products-quantity',
  templateUrl: './products-quantity.component.html',
  styleUrls: ['./products-quantity.component.scss'],
})
export class ProductsQuantityComponent {
  @Input('product')
  product!: Product;
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingCartService) {}
 

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeToCart() {
    this.cartService.removeToCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    var quantity = 0;
    for (let i of this.shoppingCart.items) {
      if (i.product_id === this.product.product_id) {
        quantity = i.quantity;
      }
    }
    return quantity;
  }
}
