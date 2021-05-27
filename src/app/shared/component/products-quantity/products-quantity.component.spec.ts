import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQuantityComponent } from './products-quantity.component';

describe('ProductsQuantityComponent', () => {
  let component: ProductsQuantityComponent;
  let fixture: ComponentFixture<ProductsQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
