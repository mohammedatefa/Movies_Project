import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthinticationService } from './authintication.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authservice=inject(AuthinticationService)
  let router=inject(Router)
  if(authservice.userdata.getValue()!=null){
    return true
  }else{
    router.navigate(['/login'])
    return false;
  }

};
