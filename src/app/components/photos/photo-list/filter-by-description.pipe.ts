import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from 'src/app/models/photos.model';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
  transform(items: Photo[], searchTerm: any): any {
    if (typeof searchTerm !== 'string') {
      return items;
    }

    searchTerm = searchTerm.trim().toLowerCase();

    // ...rest of the code
    return items.filter(item => item.description.toLowerCase().includes(searchTerm));
  }
}
