import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }

}
