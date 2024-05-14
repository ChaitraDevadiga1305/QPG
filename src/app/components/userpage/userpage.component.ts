import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent {
  header: string="Account"
  source: string = '../assets/images/userpage.jpg'
  greetings: string = 'Welcome'
  message1: string = 'A platform built to create Question Papers easily in couple of seconds.'
  message2: string = 'Create and customize Question Paper as per your requirements.'

  public FullName: string = ""

  constructor(
    private auth: AuthService,
    private userStore: UserStoreService
  ) { }

  ngOnInit() {
    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        let fullnameFromToken = this.auth.getFullNameFromToken();
        this.FullName = val || fullnameFromToken
      })
  }
}
