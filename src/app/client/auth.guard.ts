import { CanActivateFn } from '@angular/router';
import { SharelogindetailsService } from '../sharelogindetails.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const openLink = inject(SharelogindetailsService);
  return openLink.getIsLoggedIn();
};