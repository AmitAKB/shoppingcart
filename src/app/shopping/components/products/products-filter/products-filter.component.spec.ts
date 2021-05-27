import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilterComponent } from './products-filter.component';

describe('ProductsFilterComponent', () => {
  let component: ProductsFilterComponent;
  let fixture: ComponentFixture<ProductsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
