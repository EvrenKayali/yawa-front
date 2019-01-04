import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './components/vendor/vendor.component';
import { RouterModule } from '@angular/router';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';

@NgModule({
  declarations: [VendorComponent, VendorFormComponent, VendorListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class VendorModule { }
