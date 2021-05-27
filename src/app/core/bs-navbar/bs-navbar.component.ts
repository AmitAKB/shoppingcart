import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'shared/service/authservice.service';
import { AppUser } from 'shared/model/app-user';
import { ShoppingCartService } from 'shared/service/shopping-cart.service';
import { UserService } from 'shared/service/user.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss'],
})
export class BsNavbarComponent implements OnInit {
  //#1st method with subscribe
  // user: firebase.User | undefined;

  //#2nd method with Observable
  // user$: Observable<firebase.User> | undefined

  //#3rd with services

  // constructor(private afAuth: AngularFireAuth) {
  //   //#1st method with subscribe
  //   // afAuth.authState.subscribe((user) => {
  //   //   this.user = user?user:undefined;
  //   // });

  //   //#2nd method with Observable
  //   // let res:any = afAuth.authState;
  //   // this.user$ = res;
  // }

  appUser: AppUser | undefined;
  shoppingCartCount: number = 0;

  constructor(
    public auth: AuthserviceService,
    private userservice: UserService,
    private router: Router,
    private shoppingcartservice: ShoppingCartService
  ) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.appUser = {
          name: user.displayName || '',
          email: user.email || '',
          isAdmin: this.userservice.isAdmin(),
        };
      } else {
        if (!user) this.router.navigate(['/login']);
      }
    });
  }

  async ngOnInit() {
    let cart$ = await this.shoppingcartservice.getCart();
    cart$.subscribe((cart: any) => {
      this.shoppingCartCount = 0;
      if(cart && cart.items){
        for (let p of cart.items) {
          this.shoppingCartCount += parseInt(p.quantity);
        }
      }
      
    });
  }

  logout() {
    this.auth.logout();
  }
}
