import { Injectable, Injector } from '@angular/core';
import { TimeserviceService } from './timeservice.service';

@Injectable({
  providedIn: 'root',
})
export class GreetserviceService {
  t: any;
  constructor(i: Injector) {
    this.t = i.get(TimeserviceService);
  }

  greet(st: string) {
    let g = '';
    let hh = parseInt(this.t.time());
    console.log(typeof hh);

    if (hh >= 0 && hh <= 12) {
      g = `Hi ${st} Good morning`;
    } else if (hh > 12 && hh < 15) {
      g = `Hi ${st} Good afternoon`;
    } else if (hh > 15 && hh < 19) {
      g = `Hi ${st} Good evening`;
    } else {
      g = `Hi ${st} Good night`;
    }
    return g;
  }
}
