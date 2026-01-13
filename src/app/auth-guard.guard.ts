import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  console.log('AuthGuard check, isLoggedIn:', isLoggedIn);
  if (isLoggedIn !== 'true') {
    console.log('User not logged in, redirecting to login page');
    router.navigate(['/login']);
    return false;
  }

  return true;
};
