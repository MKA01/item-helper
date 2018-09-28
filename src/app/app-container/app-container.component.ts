import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.authService.isLogged) {
      this.router.navigate(['/app/main']);
    }
  }

  logOutButtonClick() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  homeButtonClick() {
    if (this.authService.isLogged) {
      this.router.navigate(['app.main']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
