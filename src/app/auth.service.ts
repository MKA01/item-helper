import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private _isLogged: boolean;

  constructor() {
    this._isLogged = true;
  }

  logIn() {
    this._isLogged = true;
  }

  logOut() {
    this._isLogged = false;
  }

  get isLogged(): boolean {
    return this._isLogged;
  }
}
