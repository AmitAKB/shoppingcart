import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Subscription } from 'rxjs';
import { Product } from 'shared/model/product';
import { ProductServiceService } from 'shared/service/product-service.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products!: Product[];
  filterData!: any[];
  subscription: Subscription;

  // tableResource!: DataTableResource<Product>;
  // items!: Product[];
  // itemCount = 0;

  constructor(private productService: ProductServiceService) {
    const list = this.productService.getAll();
    this.subscription = list
      .valueChanges({ idField: 'product_id' })
      .subscribe((products: any) => {
        this.filterData = this.products = products;
        // this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]) {
    // this.tableResource = new DataTableResource(products);
    // this.tableResource
    //   .query({ offset: 0 })
    //   .then((items) => (this.items = items));
    // this.tableResource.count().then((count) => (this.itemCount = count));
  }

  filter(query: string) {
    this.filterData = query
      ? this.products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}
}
