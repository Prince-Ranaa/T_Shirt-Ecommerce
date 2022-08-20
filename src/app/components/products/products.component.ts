import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  totalProducts: any = [];
  searchInput = '';

  search = '';
  color: any[] = [];
  gender: any[] = []
  type: any[] = []
  price: any[] = []


  cartItem: any = []




  constructor(private apiService: ApiService, private addService: AddToCartService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.apiService.getProducts().subscribe({
      next: (res) => {
        this.totalProducts = res
      }
    })
  }


  searchProduct() {
    this.search = this.searchInput
    this.getProducts();
  }

  addToCart(product: any) {
    this.addService.addToCart(product);
  }

  colorFilter(e: any) {
    if (e.target.checked) {
      this.color.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.color.length; i++) {
        if (this.color[i] == e.target.value) {
          this.color.splice(i, 1)
        }
      }
    }
    this.getProducts();
  }

  genderFilter(e: any) {
    if (e.target.checked) {
      this.gender.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.gender.length; i++) {
        if (this.gender[i] == e.target.value) {
          this.gender.splice(i, 1)
        }
      }
    }
    this.getProducts();
  }

  typeFilter(e: any) {
    if (e.target.checked) {
      this.type.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.type.length; i++) {
        if (this.type[i] == e.target.value) {
          this.type.splice(i, 1)
        }
      }
    }
    this.getProducts();
  }


  priceFilter(e: any) {
    if (e.target.checked) {
      this.price.push(e.target.value)
    }
    else {
      for (let i = 0; i < this.price.length; i++) {
        if (this.price[i] == e.target.value) {
          this.price.splice(i, 1)
        }
      }
    }
    this.getProducts();
  }
}
