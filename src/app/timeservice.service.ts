import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeserviceService {
  constructor() {}

  hh: any;
  time() {
    this.hh = new Date().getHours();

    console.log('from service ' + this.hh);

    return this.hh;
  }
}
