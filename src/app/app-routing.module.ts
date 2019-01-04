import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { VendorComponent } from './features/vendor/components/vendor/vendor.component';
import { CoreComponent } from './core/core.component';
import { VendorFormComponent } from './features/vendor/components/vendor-form/vendor-form.component';
import { VendorListComponent } from './features/vendor/components/vendor-list/vendor-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: []
      },
      {
        path: 'vendor',
        component: VendorComponent,
        children: [
          {
            path: '',
            component: VendorListComponent,
          },
          {
            path: 'list',
            component: VendorListComponent,
          },
          {
            path: 'new',
            component: VendorFormComponent,
          }
        ],
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
