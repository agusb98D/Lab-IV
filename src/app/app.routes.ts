import { Routes } from '@angular/router';

export const routes: Routes = [
  // si url no posee path, redirecciona a Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },


  // Componentes Standalone
  { path: 'home', loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent) },
  { path: 'message', loadComponent: () => import('./views/message/message.component').then(c => c.MessageComponent) },
  { path: 'page-not-found', loadComponent: () => import('./views/error/error.component').then(c => c.ErrorComponent) },


  // Dentro tiene rutas hijas pertenecientes a 'auth'
  { path: 'auth', loadChildren: () => import('./views/auth/auth.routes').then(c => c.routes) },


  // si url inexistente, redirecciona a 'page-not-found'
  { path: '**', redirectTo: 'page-not-found' },
];
