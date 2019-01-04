import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.scss']
})
export class VendorCardComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
