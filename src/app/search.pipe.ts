import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './shared/interfaces/product';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(producds: Product[], term: string): Product[] {
    return producds.filter((Product) => Product.title.toLowerCase().includes(term.toLowerCase()));
  }
}
