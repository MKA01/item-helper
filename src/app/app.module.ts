import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {ManageItemsComponent} from './manage-items/manage-items.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {AppContainerComponent} from './app-container/app-container.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AppContainerComponent,
    MainContainerComponent,
    ManageItemsComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
