import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  selectedProduct = null

  constructor(private shoppingcartservice: ShoppingCartService,private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    let prodIndex = this.route.snapshot.params.index
    this.shoppingcartservice.productlists.subscribe(data =>{
      this.selectedProduct = data[prodIndex]
    })
  }

}
