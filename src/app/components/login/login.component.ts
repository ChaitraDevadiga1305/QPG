import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserStoreService } from 'src/app/services/user-store.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private userStore: UserStoreService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  OnLogin() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value)
      //send the obj to database
      this.auth.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          const tokenPayload = this.auth.decodeToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this._snackBar.open("Login success!", "OK", { duration: 5000 });
          this.router.navigate(['UserPage'])
        },
        error: (err: any) => {
          this._snackBar.open("Invalid Email Id and password", "OK", { duration: 5000 });
        }
      })
    }
    else {
      //throw error
      ValidateForm.validateAllFormFields(this.loginForm);
      this._snackBar.open("Your form is Invalid", "OK", { duration: 5000 })
    }
  }




}
