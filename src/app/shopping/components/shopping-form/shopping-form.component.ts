import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'shared/service/authservice.service';
import { Order } from 'shared/model/order';
import { OrdersService } from 'shared/service/orders.service';

@Component({
  selector: 'shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss'],
})
export class ShoppingFormComponent implements OnInit {
  @Input('cart') cart: any;
  address: any = {};
  userId!: string;
  usersubscription!: Subscription;

  constructor(
    private orderservice: OrdersService,
    private auth: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usersubscription = this.auth.user$.subscribe(
      (user) => (this.userId = user.uid)
    );
  }

  ngOnDestroy() {
    this.usersubscription.unsubscribe();
  }

  async placeOrder(value: object) {
    let order = new Order(
      this.userId,
      value,
      this.cart.items,
      this.cart.totalPrice,
      this.cart.count
    );
    await this.orderservice.placeOrder(order).then((res) => {
      this.router.navigate(['order-success', res.id]);
    });
  }
}
