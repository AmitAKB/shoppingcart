import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthserviceService } from 'shared/service/authservice.service';
import { UserService } from 'shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private db: AngularFirestore,
    private auth: AuthserviceService,
    private route: Router,
    private userservice: UserService
  ) {
    // const things = db.collection('things').valueChanges();
    // things.subscribe(console.log);
    this.auth.user$.subscribe((user) => {
      if (!user) return;

      this.userservice.save(user);

      let returnUrl = localStorage.getItem('returnUrl') || '';
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      this.route.navigateByUrl(returnUrl);
    });
  }
}
