import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMaterial',
})
export class SearchMaterialPipe implements PipeTransform {
  transform(items: any, args?: any): any {
    if (!args) {
      return items;
    }

    return items.filteredData.filter((item) =>
      item.name.toLowerCase().includes(args.toString().toLowerCase())
    );
  }
}
