import { Component, OnInit } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  vendors = [
    {
      title: "vendor 1",
      color: "#007bff",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "vendor 2",
      color: "#e83e8c",
      description: "Integer quis lectus diam. Fusce egestas, urna et pretium facilisis, lectus dui consectetur enim, vehicula molestie lacus arcu nec tellus.",
    },
    {
      title: "vendor 3",
      color: "#6f42c1",
      description: "Maecenas viverra nulla ac risus dictum imperdiet pulvinar ac lacus. Pellentesque hendrerit volutpat risus quis congue.",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
