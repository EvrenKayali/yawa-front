import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-index',
  templateUrl: './vendor-index.component.html',
  styleUrls: ['./vendor-index.component.scss']
})
export class VendorIndexComponent implements OnInit {

  vendors: Vendor[] = [
    {
      id: 1,
      title: "vendor 1",
      color: "#007bff",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "vendor 2",
      color: "#e83e8c",
      description: "Integer quis lectus diam. Fusce egestas, urna et pretium facilisis, lectus dui consectetur enim, vehicula molestie lacus arcu nec tellus.",
    },
    {
      id: 3,
      title: "vendor 3",
      color: "#6f42c1",
      description: "Maecenas viverra nulla ac risus dictum imperdiet pulvinar ac lacus. Pellentesque hendrerit volutpat risus quis congue.",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
