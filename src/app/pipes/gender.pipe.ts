import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, gender: any[]): any {
    let result: any = []

    if (value.length === 0 || gender.length === 0) {
      return value

    }

    value.map((item: any) => {
      for (let i = 0; i < gender.length; i++) {
        if (item.gender === gender[i]) {
          result.push(item)
        }
      }
    })

    return result
  }

}
