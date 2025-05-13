import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyglobalerrorService implements ErrorHandler {

  handleError(error: any): void {
    console.log('globally error is handeled');
    console.log(error);

  }

  constructor() { }
}
