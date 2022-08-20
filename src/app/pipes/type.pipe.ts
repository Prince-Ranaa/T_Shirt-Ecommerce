import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, type: any[]): any {
    let result: any = []

    if (value.length === 0 || type.length === 0) {
      return value

    }

    value.map((item: any) => {
      for (let i = 0; i < type.length; i++) {
        if (item.type === type[i]) {
          result.push(item)
        }
      }
    })

    return result
  }
}


