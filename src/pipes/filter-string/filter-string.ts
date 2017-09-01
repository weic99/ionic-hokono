import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterString',
})
export class FilterStringPipe implements PipeTransform {
  /**
   * Takes an array of string and filter it
   */
  transform(value: string[], sub: string) {
    return value.filter((str) => {
      return str.toLowerCase().match(sub.toLowerCase());
    })
  }
}
