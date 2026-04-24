
// Protege por perfil.
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const expectedRole = route.data?.['role'];

  return authService.hasRole(expectedRole);
};
