import { Routes } from '@angular/router';

export const routes: Routes = [
  // Componentes Standalone
  { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
  { path: 'profile', loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },

  { path: '', redirectTo: '/page-not-found', pathMatch:'full' },
];
