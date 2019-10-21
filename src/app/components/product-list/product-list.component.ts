import { Component, OnInit } from '@angular/core';

import { products } from '../../products';

// learn template syntax
// https://angular.io/guide/template-syntax

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getVal(): number {
    return 4;
  }

}
