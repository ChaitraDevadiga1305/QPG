import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private FullName$ = new BehaviorSubject<string>("");
  private Role$ = new BehaviorSubject<string>("");

  constructor() { }

  public getRolesFormStore() {
    return this.Role$.asObservable();
  }

  public setRoleForStore(role: string) {
    return this.Role$.next(role);
  }

  public getFullNameFromStore() {
    return this.FullName$.asObservable();
  }


  public setFullNameForStore(fullname: string) {
    return this.FullName$.next(fullname);
  }
}
