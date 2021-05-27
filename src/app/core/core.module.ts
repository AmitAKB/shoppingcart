import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BsNavbarComponent, HomeComponent, LoginComponent],
  imports: [CommonModule, NgbModule, RouterModule.forChild([])],
  exports: [BsNavbarComponent],
})
export class CoreModule {}
