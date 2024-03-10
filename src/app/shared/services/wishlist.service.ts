import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasePortalHost } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private _HttpClient:HttpClient) { }

  wishNumber :BehaviorSubject <number> = new BehaviorSubject(0);
  
  baseUrl:string='https://ecommerce.routemisr.com//api/v1/'
  mytoken: any = { token: localStorage.getItem('eToken') };
  addToWishList(producrId: string|undefined): Observable<any> {
    return this._HttpClient.post(
    '  https://ecommerce.routemisr.com/api/v1/wishlist',
      { productId: producrId },
      {
        headers: this.mytoken,
      }
    );
  }

  getWishList(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
      headers: this.mytoken,
    });
  }
  removeFromWishList(productId: string|undefined): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        headers: this.mytoken
      }
    );
  }
}
