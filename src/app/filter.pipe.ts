import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    return value.filter(e=>{
      e.startsWith(args[0])
    });
  }

}
