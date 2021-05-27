import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'shared/service/categoryservice.service';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss'],
})
export class ProductsFilterComponent implements OnInit {
  categories$: object | undefined;
  @Input('category') category: string | undefined;
  constructor(private categoryservice: CategoryService) {
    this.categoryservice.getAll().subscribe((category: any) => {
      this.categories$ = category[0] ? category[0] : {};
    });
  }

  ngOnInit(): void {}
}
