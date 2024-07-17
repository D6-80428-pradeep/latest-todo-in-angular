import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './auth/components/login/login.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    title: 'layout',
    canActivate: [authGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'forgot-password',
  },
];
