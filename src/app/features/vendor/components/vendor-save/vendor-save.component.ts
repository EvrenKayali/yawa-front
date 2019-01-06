import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-save',
  templateUrl: './vendor-save.component.html',
  styleUrls: ['./vendor-save.component.scss']
})
export class VendorSaveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(vendor: Vendor) {
    console.log(vendor);
    this.router.navigate(["vendor"]);
  }
}
