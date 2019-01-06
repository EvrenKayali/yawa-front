import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { VendorService } from '../../services/vendor.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';

@Component({
  selector: 'app-vendor-index',
  templateUrl: './vendor-index.component.html',
  styleUrls: ['./vendor-index.component.scss']
})
export class VendorIndexComponent implements OnInit {

  vendors$: Observable<Vendor[]>;
  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.vendors$ = this.store.select(state => state.vendor.vendors);
    //this.vendors$ = this.vendorService.getVendors();
    // .subscribe(vendors => this.vendors = vendors);
  }

}
