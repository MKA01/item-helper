import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from '../components/main-container/main-container.component';
import { AppContainerComponent } from '../components/app-container/app-container.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { ProductPageComponent } from '../components/product-page/product-page.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginPageComponent
  },
  {
    path : 'app',
    component : AppContainerComponent,
    canActivate : [ AuthGuardService ],
    canActivateChild : [ AuthGuardService ],
    children : [
      {
        path : 'main',
        component : MainContainerComponent
      },
      {
        path : 'product/:id',
        component : ProductPageComponent
      },
      {
        path : 'product/new',
        component : ProductPageComponent
      }
    ]
  },
  {
    path : '',
    redirectTo : 'app/main',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : '/app/main'
  }
];

@NgModule({
  imports : [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule {
}
