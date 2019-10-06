import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  itemQuantity = 0
  totalAmount = 0

  

  constructor(private shoppingcartservice: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingcartservice.itemQuantity.subscribe(quantity => {
      this.itemQuantity = quantity
    })

    this.shoppingcartservice.totalAmount.subscribe(amount => {
      this.totalAmount = amount
    })
  }

}
