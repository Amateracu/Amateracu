import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string,): string {
    return  value
      .split('. ')
      .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
      .join('. ');
  }
}
