import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$!: Observable<unknown>;
  shoppingCartCount: number = 0;
  cartData: any;
  totalPrice: number = 0;

  constructor(private shoppingcartservice: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingcartservice.getCart();
    this.cart$.subscribe((cart: any) => {
      this.cartData = cart;
      this.shoppingCartCount = 0;
      this.totalPrice = 0;
      if (cart && cart.items) {
        for (let p of cart.items) {
          this.shoppingCartCount += parseInt(p.quantity);
          this.totalPrice += p.quantity * p.price;
        }
      }
    });
  }

  clearCart() {
    this.shoppingcartservice.clearCart();
  }
}
