import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  cartNumber :BehaviorSubject <number> = new BehaviorSubject(0);

  myheaders: any = { token: localStorage.getItem('eToken') };
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: productId },
      {
        headers: this.myheaders,
      }
    );
  }
  grtUserData(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.myheaders,
    });
  }

  removeItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers: this.myheaders
      }
    );
  }

  updateCartProducr(productId: string ,newCount:number):Observable<any>{
    return this ._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
count :newCount
      },
      {
        headers: this.myheaders
      }
    )
  }

  checkOut(cartId:string, userData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress:userData
       
    },
   {
    headers:this.myheaders
   }
    )
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: this.myheaders
      }
    );
  }
}
