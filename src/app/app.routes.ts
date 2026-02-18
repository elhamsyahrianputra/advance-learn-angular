import { Routes } from '@angular/router';
import { IndexComponent as AuthLayout } from './core/components/layouts/auth/index/index.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { IndexComponent as LandingLayout } from './core/components/layouts/landing/index/index.component';
import { RegisterPageComponent } from './features/auth/pages/register-page/register-page.component';
import { IndexComponent as DashboardLayout } from './core/components/layouts/dashboard/index/index.component';

export const routes: Routes = [
  // Auth
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ],
  },

  // Dashboard
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: 'users',
        component: DashboardLayout,
        children: [
          { path: '', component: DashboardLayout },
          { path: 'detail', component: DashboardLayout },
        ],
      },
      { path: 'products', component: DashboardLayout },
    ],
  },

  // Landing
  {
    path: '',
    component: LandingLayout,
  },
];
