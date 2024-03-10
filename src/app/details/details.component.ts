import { Product } from './../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdataService } from '../shared/services/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

constructor(private _ActivatedRoute:ActivatedRoute ,private _EcomdataService:EcomdataService){}



 productDetails :Product ={} as Product;
 productSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  autoplay: true,
 items: 1,
  nav: false,
}

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let idProducd:any = params.get('id');
       
        this._EcomdataService.getProductDetails(idProducd).subscribe({
          next:(response)=>{
           this.productDetails =response.data
          }
        })
      }
    })
}
  
}
