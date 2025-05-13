import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MathService {

  constructor() {
    console.log('conustructor called');
    
   }

  addNums(a:number, b:number):string{
    
    let c = a+b;
    return 'the sum is: '+c
  }

  divideNums(a:number, b:number):any{
    
    
      let c = a/b;
      if(b==0){
        throw new Error ("U r tryning to divide by 0")
      }
      else{
          return 'the division is: '+c
      }
  }

  validateAge(age:number):any{

   
      if(age<18){
        throw new Error('invalid age')
      }
      else{
        return age
      }
  
  }
}
