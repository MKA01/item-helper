import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector : 'app-app-container',
  templateUrl : './app-container.component.html',
  styleUrls : [ './app-container.component.css' ]
})
export class AppContainerComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _router: Router) {

  }

  ngOnInit() {
    if (!this._authService.isLogged) {
      this._router.navigate([ '/app/main' ]);
    }
  }

  logOutButtonClick() {
    this._authService.logOut();
    this._router.navigate([ '/login' ]);
  }

  homeButtonClick() {
    if (this._authService.isLogged) {
      this._router.navigate([ 'app.main' ]);
    } else {
      this._router.navigate([ '/login' ]);
    }
  }

}
