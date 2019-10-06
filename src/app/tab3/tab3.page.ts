import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  mycarts = []
  totalAmount = 0

  constructor(private shoppingcartservice: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingcartservice.mycarts.subscribe(mycart => {
      this.mycarts = mycart
    })

    this.shoppingcartservice.totalAmount.subscribe(mycart => {
      this.totalAmount = mycart
    })
  }

  removeItems(i){
    this.shoppingcartservice.removeFromCart(i)

  }


}
