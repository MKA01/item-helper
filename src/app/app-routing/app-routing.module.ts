import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from '../main-container/main-container.component';
import {AppContainerComponent} from '../app-container/app-container.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {AuthGuardService} from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'app',
    component: AppContainerComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'main',
        component: MainContainerComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/app/main'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
