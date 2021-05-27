import { Component, Input } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';

@Component({
  selector: 'products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent {
  @Input('product')
  product!: Product;
  @Input('show-actions')
  showActions: boolean = true;
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    var quantity =0;
    for(let i of this.shoppingCart.items){
      if(i.product_id===this.product.product_id){
        quantity = i.quantity;
      }
    }
    return quantity;
  }
}
