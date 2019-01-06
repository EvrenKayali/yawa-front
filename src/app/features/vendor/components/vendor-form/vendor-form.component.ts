import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Vendor } from '../../models/vendor.model';
import * as fromStore from '../../../../store/reducers';
import { Store } from '@ngrx/store';
import * as vendorActions from '../../../../store/actions/vendor.actions';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  vendorFormGroup: FormGroup;
  vendor: Vendor;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.State>) {

    this.vendorFormGroup = fb.group({
      title: '',
      description: '',
      color: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.vendor = Object.assign({}, this.vendorFormGroup.value);
    this.store.dispatch(new vendorActions.AddVendor(this.vendor));
  }

}
