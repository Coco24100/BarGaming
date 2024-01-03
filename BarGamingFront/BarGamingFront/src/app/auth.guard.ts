import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLogged()) {
      const requiredRole = route.data['role'] as string;

      // Vérifiez si l'utilisateur a le rôle nécessaire pour accéder à la route
      const userRoles = this.authService.getCompte()?.roles || [];
      if (requiredRole && !userRoles.includes(requiredRole)) {
        this.router.navigate(['/accueil']);
        return false;
      }

      return true;
    }

    // Non connecté, redirigez vers la page de connexion avec l'URL de retour
    this.router.navigate(['/login']);
    return false;
  }
}
