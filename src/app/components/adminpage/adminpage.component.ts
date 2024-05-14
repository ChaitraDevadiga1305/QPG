import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  public users: any = []
  constructor(
    private api: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe((res: any) => {
        this.users = res;
      })

  }

}
