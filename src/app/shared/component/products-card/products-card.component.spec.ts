import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardComponent } from './products-card.component';

describe('ProductsCardComponent', () => {
  let component: ProductsCardComponent;
  let fixture: ComponentFixture<ProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
