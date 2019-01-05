import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { VendorService } from '../../services/vendor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-index',
  templateUrl: './vendor-index.component.html',
  styleUrls: ['./vendor-index.component.scss']
})
export class VendorIndexComponent implements OnInit {

  vendors$: Observable<Vendor[]>;
  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.vendors$ = this.vendorService.getVendors();
    // .subscribe(vendors => this.vendors = vendors);
  }

}
