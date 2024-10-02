import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = Inject(AuthenticatorService);
  const router = Inject(Router);

  if (authService.isConected()){
    return true;
  }else{
    router.navigate(['/home']);
    return false;
  }
};
