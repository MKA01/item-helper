import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _isLogged: boolean;

  constructor() {
    this._isLogged = true;  // TODO: Trzeba kiedyś wyrzucić
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  logIn() {
    this._isLogged = true;
  }

  logOut() {
    this._isLogged = false;
  }
}
