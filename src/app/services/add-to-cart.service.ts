import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  cartItemList: any = []
  productList = new BehaviorSubject<any>([]);


  constructor() { }


  getCartItemList() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList);
  }
}

