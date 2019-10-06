import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  productlists = new BehaviorSubject([
    {
      img:"https://images.homedepot-static.com/productImages/fba55797-ad00-4770-a995-fbe0e9f6fc5d/svn/gurney-s-fruit-trees-61653-64_1000.jpg",
      label:"Apple",
      price:2,
      descriptions:["Imported Fuji Apple","Sweet and Delicious"],
      itemSelected:false,
      quantity:0,
      totalPrice:0,
      maximumQuantity : 10
    },
    {
      img:"http://www.friedchillies.com/images/articles/cover1.jpg",
      label:"Durian",
      price:10,
      descriptions:["The king of fruit","Delicious"],
      itemSelected:false,
      quantity:0,
      totalPrice:0,
      maximumQuantity : 10
    },
    {
      img:"https://cdn2.tstatic.net/manado/foto/bank/images/manfaat-buah-manggis5135.jpg",
      label:"Mangosteen",
      price:3,
      descriptions:["Asian taste","Sweet and promise will make your day"],
      itemSelected:false,
      quantity:0,
      totalPrice:0,
      maximumQuantity : 10
    },

  ])

  mycarts = new BehaviorSubject([])
  itemQuantity = new BehaviorSubject(0)
  totalAmount = new BehaviorSubject(0)



  constructor() { }

  addItems(index:number){

    let product = this.productlists.getValue()
    if(product[index].quantity < product[index].maximumQuantity){
      product[index].quantity +=1
      product[index].totalPrice = product[index].quantity * product[index].price

    }
  }

  minusItems(index:number){
    let product = this.productlists.getValue()

    if(product[index].quantity > 0){
      product[index].quantity -= 1
      product[index].totalPrice = product[index].quantity * product[index].price
    }
  }
  

  addToCart(index:number){
    
    let product = this.productlists.getValue()
    let tempCart = this.mycarts.getValue()
 
    tempCart.push(product.splice(index, 1)[0])
    this.calculateTotalPrice()

  }

  removeFromCart(idx: number){
    let cart = this.mycarts.getValue()
    let tempCart = this.productlists.getValue()

    tempCart.push(cart.splice(idx, 1)[0])
    this.calculateTotalPrice()
  }


  calculateTotalPrice(){
    let cart = this.mycarts.getValue()
    let tempPrice = 0
    for(let item of cart){
      tempPrice += item.totalPrice
    }
    this.totalAmount.next(tempPrice)
    this.itemQuantity.next(cart.length)
  }



}
