import { Component } from '@angular/core';
import { AddToCartService } from './services/add-to-cart.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';

  totalItem = 0;

  constructor(private cartService: AddToCartService) {

  }

  ngOnInit() {
    this.cartService.getCartItemList().subscribe(res => {
      this.totalItem = res.length
      return length
    })
  }
}
