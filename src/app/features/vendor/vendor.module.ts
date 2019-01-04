import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './components/vendor/vendor.component';
import { RouterModule } from '@angular/router';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { VendorCardComponent } from './components/vendor-card/vendor-card.component';
import { VendorIndexComponent } from './components/vendor-index/vendor-index.component';

@NgModule({
  declarations: [VendorComponent, VendorFormComponent, VendorListComponent, VendorCardComponent, VendorIndexComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class VendorModule { }
