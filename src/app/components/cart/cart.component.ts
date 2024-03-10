import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, count } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}

  cartDeltails: any = null;

  removeCartItem(id: string): void {
    this._CartService.removeItem(id).subscribe({
      next: (response) => {
        this.cartDeltails = response.data;
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
    });
  }

  changeCount(id: string, count: number): void {
    if (count > 0) {
      this._CartService.updateCartProducr(id, count).subscribe({
        next: (response) => {
          this.cartDeltails = response.data;
        },
      });
    }
  }

  clear(): void {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        if (response.message == 'success') {
          this.cartDeltails = null;
          this._CartService.cartNumber.next(0);
        }
      },
    });
  }
  ngOnInit(): void {
    this._CartService.grtUserData().subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartDeltails = response.data;
      },
    });
  }
}
