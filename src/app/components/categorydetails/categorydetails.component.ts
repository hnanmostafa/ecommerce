import { Subcategory } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css'],
})
export class CategorydetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcomdataService
  ) {}
  categoryId: string | null = '';
  flag :boolean=true
  _id :string=''
  categiryDetails: Category = {
    _id: '',
    name: '',
    slug: '',
    image: '',
    
  };
  Subcategory: Subcategory[] = [];
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryId = params.get('id');
      },
    });
    this._EcomdataService.getCategoriesDetails(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.categiryDetails = response.data;
      },
    });

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
