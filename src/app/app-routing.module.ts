import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { VendorComponent } from './features/vendor/components/vendor/vendor.component';
import { CoreComponent } from './core/core.component';
import { VendorIndexComponent } from './features/vendor/components/vendor-index/vendor-index.component';
import { VendorSaveComponent } from './features/vendor/components/vendor-save/vendor-save.component';
import { AuthorizationGuard } from './services/authorization.guard';
import { LoginComponent } from './features/auth/components/login/login.component';
import { UserProfileIndexComponent } from './features/user-profile/components/user-profile-index/user-profile-index.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: []
      },
      {
        path: 'profile',
        component: UserProfileIndexComponent,
      },
      {
        path: 'vendor',
        component: VendorComponent,
        children: [
          {
            path: '',
            component: VendorIndexComponent,
          },
          {
            path: 'list',
            component: VendorIndexComponent,
          },
          {
            path: 'new',
            component: VendorSaveComponent,
          }
        ],
      },
      //{ path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
