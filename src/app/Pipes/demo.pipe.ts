import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe',
  pure: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    else {
      let str = value.split('').reverse().join('');
      return str;
    }
  }
}
