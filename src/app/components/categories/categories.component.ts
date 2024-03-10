import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  constructor(private _EcomdataService:EcomdataService){}
  categories:any[]=[];
  Subcategory:any[]=[]
  flag :boolean=true
  _id :string=''
  ngOnInit(): void {
    this._EcomdataService.getCategories().subscribe({
      next:(response)=>{
       console.log(response);
     
       this.categories = response.data
      }
     })

     this._EcomdataService.getSubCategories().subscribe({
      next: (response) => {
        console.log(response)
        this.Subcategory = response.data;
      },
    });
  }
  hideModel(element:EventTarget | null,_id:HTMLImageElement):void{
    if(element==_id)return;
    this.flag =true
      }
}
