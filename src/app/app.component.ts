import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'QPG';
  ToolbarTitle: string = 'Question Paper Generator';
  public role: string = "";

  constructor(
    private auth: AuthService,
    private userStore: UserStoreService,

  ) { }

  ngOnInit() {
    this.userStore.getRolesFormStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken;
      })
  }

}
