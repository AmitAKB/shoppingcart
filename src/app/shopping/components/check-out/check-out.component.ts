import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  cart: any;
  cartsubscription!: Subscription;

  constructor(private shoppingcartservice: ShoppingCartService) {}

  total = 0;
  count = 0;
  async ngOnInit() {
    let cart$ = await this.shoppingcartservice.getCart();
    this.cartsubscription = cart$.subscribe((cart: any) => {
      this.cart = cart;
      this.total = 0;
      this.count = 0;
      cart.items.reduce((a: any, b: any) => {
        return (
          (this.total = a.price + b['quantity'] * b['price']),
          (this.count = a.quantity + b.quantity)
        );
      });
      this.cart['totalPrice'] = this.total;
      this.cart['count'] = this.count;
    });
  }

  ngOnDestroy() {
    this.cartsubscription.unsubscribe();
  }
}
