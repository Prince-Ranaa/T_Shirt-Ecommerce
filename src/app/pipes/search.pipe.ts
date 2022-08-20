import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchString: string, propName: string): any[] {
    let result = [];

    if (value.length === 0 || searchString === '' || propName === '') {
      return value
    }

    for (let item of value) {
      if ((item[propName]).toLowerCase().includes(searchString.trim().toLowerCase()) || (item['type']).toLowerCase().includes(searchString.trim().toLowerCase())) {
        result.push(item)
      }
    }
    return result
  }

}
