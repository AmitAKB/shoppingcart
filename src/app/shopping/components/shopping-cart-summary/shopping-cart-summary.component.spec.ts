import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSummaryComponent } from './shopping-cart-summary.component';

describe('ShoppingCartSummaryComponent', () => {
  let component: ShoppingCartSummaryComponent;
  let fixture: ComponentFixture<ShoppingCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
