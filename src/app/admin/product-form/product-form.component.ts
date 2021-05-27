import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'shared/service/categoryservice.service';
import { ProductServiceService } from 'shared/service/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories$: object | undefined;
  product: any = {};
  id: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryservice: CategoryService,
    private productservice: ProductServiceService
  ) {
    this.categoryservice.getAll().subscribe((res: any) => {
      this.categories$ = res[0] ? res[0] : {};
    });

    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id)
      this.productservice
        .get(this.id)
        .subscribe((res: any) => (this.product = res));
  }

  ngOnInit(): void {}

  save(value: object) {
    if (this.id) {
      this.productservice.update(this.id, value);
    } else {
      this.productservice.create(value);
    }
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(confirm("Are you sure you want to delete this product?")){
      this.productservice.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }
}
