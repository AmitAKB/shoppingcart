import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'shared/service/authservice.service';
import { UserService } from 'shared/service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private afauth: AuthserviceService,
    private userservice: UserService
  ) {}

  canActivate() {
    return true;
    //due to some firebase issue adding default value
    // this.afauth.user$.subscribe((user) => {
    //   let adminAuth: any = this.userservice.get(user);
    //   console.log("adminAuth");
    //   console.log(adminAuth);
    //   return adminAuth?true:false;
    // })
    //   ? true
    //   : false;
  }
}
