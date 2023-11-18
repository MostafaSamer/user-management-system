// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loggedInUser = this.authService.getLoggedInUser();

    if (!loggedInUser) {
      this.router.navigate(['/login']);
      return false;
    }

    const routeRoles = route.data?.['roles'] as number[];

    if (routeRoles && routeRoles.indexOf(loggedInUser.role) === -1) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
