import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector : 'app-login-page',
  templateUrl : './login-page.component.html',
  styleUrls : [ './login-page.component.scss' ]
})
export class LoginPageComponent implements OnInit {
  presentAlert: boolean;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {
    this.presentAlert = false;
  }

  logIn(form: NgForm) {
    const login = form.value.login;
    const password = form.value.password;

    if (login === '123' && password === '123') {  // TODO: Dodac prawdziwe logowanie z autentykacją
      this.presentAlert = false;
      this.authService.logIn();
      this.router.navigate([ '/app/main' ]);
    } else {
      this.presentAlert = true;
    }
  }

}
