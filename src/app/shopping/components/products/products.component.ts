import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'shared/model/product';
import { ProductServiceService } from 'shared/service/product-service.service';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: Product[];
  category!: string;
  filterData!: Product[];
  cart: any;
  subscrip!: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private productservice: ProductServiceService,
    private shoppingService: ShoppingCartService
  ) {
    const list = this.productservice.getAll();

    list.valueChanges({ idField: 'product_id' }).subscribe((products: any) => {
      this.filterData = this.products = products;

      this.route.queryParamMap.subscribe((params) => {
        this.category = params.get('category') || '';
        this.filterData = this.category
          ? this.products.filter((p) => p.category === this.category)
          : this.products;
      });
    });
  }

  async ngOnInit() {
    this.subscrip = (await (this.shoppingService.getCart())).subscribe(res=>{this.cart= res;});
  }

  ngOnDestroy(){
    this.subscrip?.unsubscribe()
  }
}
