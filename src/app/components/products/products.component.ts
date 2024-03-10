import { Product } from './../../shared/interfaces/product';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';

import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private _EcomdataService: EcomdataService ,private _CartService:CartService ,private _ToastrService:ToastrService,private _WishlistService: WishlistService) {}
  products:Product[]=[];
  categories: any[] = [];
  searchTerm:string='';
  wishListData: string[] = [];

  addCart(id:string): void {
    this._CartService.addToCart(id).subscribe({
     next:(response)=>{
console.log(response);
this._ToastrService.success(response.message,'Fresh Cart')
     }
    })
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

  addFav(producrId: string | undefined): void {
    this._WishlistService.addToWishList(producrId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }
  ngOnInit(): void {
    
    this._EcomdataService.getAllProuducts().subscribe({
      next: (response) => {
        console.log(response);
        
        this.products = response.data
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
