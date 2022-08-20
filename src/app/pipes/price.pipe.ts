import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, price: any[]): any {
    let result: any = []

    if (value.length === 0 || price.length === 0) {
      return value

    }

    value.map((item: any) => {



      for (let i = 0; i < price.length; i++) {
        let a = price[i].split(" ")

        if (price[i].search("more") > 0) {
          if (item.price > 450) {
            result.push(item)
          }
        }

        else if (item.price > parseInt(a[0]) && item.price <= parseInt(a[1])) {
          result.push(item)
        }
      }
    })

    return result
  }
}


