import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item)
  }

}
