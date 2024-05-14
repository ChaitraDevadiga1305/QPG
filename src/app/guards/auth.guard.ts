import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    else {
      this._snackBar.open("Please Login First.", "OK", { duration: 5000 });
      this.router.navigate(['Home'])
      return false;
    }
  }

}
