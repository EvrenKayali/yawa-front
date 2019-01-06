import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  vendorFormGroup: FormGroup;
  vendor: Vendor;

  constructor(private fb: FormBuilder) {
    this.vendorFormGroup = fb.group({
      title: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.vendor = Object.assign({}, this.vendorFormGroup.value);
    console.log(this.vendor);
  }

}
