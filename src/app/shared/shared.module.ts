import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { ProductsCardComponent } from './component/products-card/products-card.component';
import { ProductsQuantityComponent } from './component/products-quantity/products-quantity.component';
import { AuthGuard } from './service/auth-guard.service';
import { AuthserviceService } from './service/authservice.service';
import { CategoryService } from './service/categoryservice.service';
import { OrdersService } from './service/orders.service';
import { ProductServiceService } from './service/product-service.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule,
  ],
  declarations: [ProductsCardComponent, ProductsQuantityComponent],
  exports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    ProductsCardComponent,
    ProductsQuantityComponent,
  ],
  providers: [
    AuthserviceService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductServiceService,
    ShoppingCartService,
    OrdersService,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule,
  ],
})
export class SharedModule {}
