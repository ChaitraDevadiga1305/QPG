import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
//import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  // public FullName: string = ""
  @Input() ComponentName: any;
  constructor(
    private auth: AuthService,
    //private userStore: UserStoreService
  ) { }

  // ngOnInit() {
  //   this.userStore.getFullNameFromStore()
  //     .subscribe(val => {
  //       let fullnameFromToken = this.auth.getFullNameFromToken();
  //       this.FullName = val || fullnameFromToken
  //     })
  // }

  logout() {
    this.auth.signOut();
  }
}
