import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _EcomdataService: EcomdataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  products: Product[] = [];
  categories: any[] = [];
  searchTerm: string = '';
  wishListData: string[] = [];

  addFav(producrId: string | undefined): void {
    this._WishlistService.addToWishList(producrId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }

  removeFav(productID: string | undefined): void {
    this._WishlistService.removeFromWishList(productID).subscribe({
      next: (response) => {
        console.log(response.data);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }

  addCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message, 'Fresh Cart');
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplaySpeed: 2000,

    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplaySpeed: 2000,

    navText: ['', ''],
    autoplay: true,
    items: 1,
    nav: false,
  };
  ngOnInit(): void {
    this._EcomdataService.getAllProuducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });

    this._EcomdataService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response.data;
      },
    });

    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        const newData = response.data.map((item:any)=>item._id)
        this.wishListData = newData
      },
    });
  }
}
