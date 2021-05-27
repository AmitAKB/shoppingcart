import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'shared/service/orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  order: any;
  constructor(private orders: OrdersService) { }

  ngOnInit(): void {
    this.orders.getOrder().subscribe((res)=>{
      this.order = res;
    });
  }

}
