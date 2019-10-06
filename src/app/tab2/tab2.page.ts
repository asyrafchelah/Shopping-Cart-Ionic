import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  productlists = []
  mycarts=[]

  constructor(private shoppingcartservice: ShoppingCartService,private navCtrl: NavController) { }

  ngOnInit() {
    this.shoppingcartservice.productlists.subscribe(productlists => {
      this.productlists = productlists
    })
  }

  // addQuantity(index){
  //   this.productList[index].quantity += 1
  // }

  addItems(i){
    this.shoppingcartservice.addItems(i)
  }

  minusItems(index){
    if(this.productlists[index].quantity > 0){
      this.productlists[index].quantity -= 1
    }
  }
  

  addToCart(i){
    this.shoppingcartservice.addToCart(i)


  }

  navigate(index){
    this.navCtrl.navigateForward("/product-details/" + index)
  }


}
