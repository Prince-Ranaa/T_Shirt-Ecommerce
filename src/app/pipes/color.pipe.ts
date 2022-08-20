import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: any, color: any[]): any {
    let result: any = []

    if (value.length === 0 || color.length === 0) {
      return value

    }

    value.map((item: any) => {
      for (let i = 0; i < color.length; i++) {
        if (item.color === color[i]) {
          result.push(item)
        }
      }
    })

    return result

  }



}
