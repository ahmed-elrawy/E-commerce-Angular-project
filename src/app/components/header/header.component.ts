import { Component, OnInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

cartData!: CartModelServer | undefined;
cartTotal: number | undefined;

cartDataIsZero: boolean  = false

  constructor(public cartService: CartService) 
  { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe( total =>  this.cartTotal = total);
    
    this.cartService.cartDataObs$.subscribe( data => {
      this.cartData = data

      if(this.cartData.data[0].numInCart !== 0){
        this.cartDataIsZero = true
      }
    })
  }

}
