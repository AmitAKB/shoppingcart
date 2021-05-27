import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthserviceService, private router: Router) { }

  canActivate(_route: any, state: RouterStateSnapshot){
      return this.auth.user$.subscribe(user => {
        if(user) return true;

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
        return false;
      })?true:false;
  }
}
