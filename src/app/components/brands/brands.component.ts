import { Component } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  constructor(private _EcomdataService:EcomdataService){}
  brands:Brand[]=[];
  flag :boolean=true
  modelImg :string=''
  ngOnInit(): void {
    this._EcomdataService.getBrand().subscribe({
      next:(response)=>{
       console.log(response);
     
       this.brands = response.data
      }
     })
  }

  hideModel(element:EventTarget | null,img:HTMLImageElement):void{
if(element==img)return;
this.flag =true
  }
}
