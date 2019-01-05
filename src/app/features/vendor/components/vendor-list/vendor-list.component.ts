import { Component, OnInit, Input } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  @Input() vendors: Vendor[];

  constructor() { }

  ngOnInit() {
  }

}
