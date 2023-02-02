import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
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

@Pipe({
  name: 'uppercase',
  pure: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    } else if (typeof value !== 'string') {
      return invalidPipeArgumentErrror(UpperCasePipe, value);
    }
    return value.toUpperCase();
  }
}

function invalidPipeArgumentErrror(UpperCasePipe, value: never): string {
  throw new Error('Ivalid Pipe Argument');
}
