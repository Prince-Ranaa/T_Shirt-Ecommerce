import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem: any = [];
  constructor(private cartService: AddToCartService) { }

  ngOnInit(): void {
    this.cartService.getCartItemList().subscribe((res) => {
      this.cartItem = res
    })

    for (let i = 0; i < this.cartItem.length; i++) {
      this.cartItem[i].totalQuantityAdded = 1
      this.cartItem[i].totalPrice = 0

    }
  }


  deleteItem(index: any) {
    this.cartItem.splice(index, 1)
    this.ngOnInit()
  }


  increaseQuantity(item: any) {
    item.totalQuantityAdded += 1
    if (item.totalQuantityAdded > item.quantity) {
      item.totalQuantityAdded = item.quantity
      alert(`only ${(item.quantity)} items left cannot buy more`)
    }
  }

  decreaseQuantity(item: any) {
    item.totalQuantityAdded -= 1
    if (item.totalQuantityAdded <= 0) {
      item.totalQuantityAdded = 0;
    }
  }


  Price(item: any) {
    let totalPrice = item.totalQuantityAdded * item.price
    return totalPrice
  }



  totalPrice() {
    let grandTotal = 0;
    this.cartItem.map((item: any) => {
      grandTotal += item.price * item.totalQuantityAdded
      console.log("wadw");
    })
    return grandTotal
  }
}
