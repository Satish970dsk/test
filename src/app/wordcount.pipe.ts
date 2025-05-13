import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount',
  standalone: false
})
export class WordcountPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    return value.split(' ').length;
  }

}
