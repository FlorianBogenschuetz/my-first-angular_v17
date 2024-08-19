import { Component } from '@angular/core';
import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductAlertsComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('Das Produkt wurde geteilt!');
  }

  onNotify() {
    window.alert('Sie bekommen eine Benachrichtigung wenn das Produkt im Angebot ist.')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/