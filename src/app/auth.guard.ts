import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  
  let isloggIn=sessionStorage.getItem("isloggIn");

  if(isloggIn=='false'){
    alert("Please login,redirecting to login page !!");
    _router.navigate(['login']);
    // console.log("is false")
    return false;
  }
  return true;
};
