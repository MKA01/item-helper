import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseModuleComponent } from './components/database-module/database-module.component';

@NgModule({
  declarations : [
    AppComponent,
    LoginPageComponent,
    AppContainerComponent,
    MainContainerComponent,
    ManageProductsComponent,
    ProductsListComponent,
    ProductComponent,
    CreateProductFormComponent,
    ProductPageComponent,
    CreateProductComponent,
    DatabaseModuleComponent
  ],
  imports : [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers : [
    AuthService,
    AuthGuardService,
    ProductService
  ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
