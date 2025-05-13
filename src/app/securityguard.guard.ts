import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

class A{
  constructor(){

  }
}
export const securityguardGuard: CanActivateFn = (route, state) => {

  if(sessionStorage.getItem('uname')==null){
    const r =inject(Router)
    r.navigate(['login'])
    return false
  }
  return true
};
