import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  num:number = 1
  increment():number{
   
   return this.num+=1
    //console.log(this.num);
    
  }
  decrement():number{
    return this.num-=1
     //console.log(this.num);
     
   }
  constructor() { }
}
