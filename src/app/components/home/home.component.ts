import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { ProductModelServer, serverResponse } from "../../models/product.model";
import { Router } from "@angular/router";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.productService.getAllProducts(8).subscribe((prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }



  selectProduct(id: number) {
    this.router.navigate(['/product/', id]).then();
  }

  AddToCart(id: number) {
    this.cartService.AddProductToCart(id);
  }
}
