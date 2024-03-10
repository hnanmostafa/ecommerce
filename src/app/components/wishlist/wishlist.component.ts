import { Component, OnInit, NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService,
    private _CartService: CartService
  ) {}

  products: Product[] = [];
  wishListData: string[] = [];

  addCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
    });
  }
  removeFav(product: string | undefined): void {
    this._WishlistService.removeFromWishList(product).subscribe({
      next: (response) => {
        console.log(response.data);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
        this._WishlistService.getWishList().subscribe({
          next: (response) => {
            this.products = response.data;
            const newProducrData = this.products.filter(
              (item: any) => this.wishListData.includes(item._id)
            );
          },
        });
      },
    });
  }
  addFav(producrId: string | undefined): void {
    this._WishlistService.addToWishList(producrId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
      },
    });
  }
  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });
  }
}
