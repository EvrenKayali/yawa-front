import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { VendorComponent } from './features/vendor/components/vendor/vendor.component';
import { CoreComponent } from './core/core.component';
import { VendorFormComponent } from './features/vendor/components/vendor-form/vendor-form.component';
import { VendorListComponent } from './features/vendor/components/vendor-list/vendor-list.component';
import { VendorIndexComponent } from './features/vendor/components/vendor-index/vendor-index.component';
import { VendorSaveComponent } from './features/vendor/components/vendor-save/vendor-save.component';

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
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
