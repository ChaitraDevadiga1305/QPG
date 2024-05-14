import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hideCreatepassword = true;
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }


  // hideConfirmpassword = true;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // confirmpwd: ['', Validators.required]
    })

  }

  OnSignUp() {
    if (this.signUpForm.valid) {
      //send the obj to database
      this.auth.signUp(this.signUpForm.value).subscribe({
        next: ((res: any) => {
          this._snackBar.open(res.message, "OK", {
            duration: 5000
          });
          this.signUpForm.reset();
          this.router.navigate(['Login']);
        }),
        error: ((err: any) => {
          this._snackBar.open(err.error.message, "OK", {
            duration: 10000
          });

        })
      })
    }
    else {
      //throw error
      ValidateForm.validateAllFormFields(this.signUpForm);
      this._snackBar.open("Your form is Invalid", "OK", {
        duration: 5000
      })
    }
  }




}

