import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstname: 'Bruno',
      lastname: 'Ferreira'
    };
  }

  updateCurrentUser(firstname: string, lastname: string) {
    this.currentUser.firstname = firstname;
    this.currentUser.lastname = lastname;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
