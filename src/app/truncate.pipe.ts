import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: false
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]):string {
    return value.slice(0,20)+"...";
  }

}
