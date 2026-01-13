import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('../components/services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'services/:id',
    loadComponent: () =>
      import('../components/services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
];
