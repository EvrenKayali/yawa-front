import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Vendor>();
  vendorFormGroup: FormGroup;
  vendor: Vendor;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.vendorFormGroup = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.compose([Validators.minLength(5), Validators.required])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.submitted.emit(Object.assign({}, this.vendorFormGroup.value))
  }

}
