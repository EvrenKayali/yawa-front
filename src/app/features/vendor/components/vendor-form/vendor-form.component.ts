import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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

  }

  ngOnInit() {
    this.vendorFormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      contacts: this.fb.array([this.createContactItem()])
    });
  }

  get Contacts() {
    return this.vendorFormGroup.get('contacts') as FormArray;
  }

  addContact() {
    this.Contacts.push(this.createContactItem());
  }

  createContactItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: '',
      phone: '',
    });
  }

  deleteContact(index: number) {
    this.Contacts.removeAt(index);
  }

  submit() {
    this.vendor = Object.assign({}, this.vendorFormGroup.value)
    this.submitted.emit(this.vendor);
  }

}
