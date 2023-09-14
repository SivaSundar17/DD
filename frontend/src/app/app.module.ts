import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CategoryDiscountsComponent } from './components/category-discounts/category-discounts.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { BestProductDetailsComponent } from './pages/best-product-details/best-product-details.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { ModalComponent } from './components/modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdDetailsComponent,
    SearchResultsComponent,
    ClickOutsideDirective,
    CategoryDiscountsComponent,
    BestProductsComponent,
    BestProductDetailsComponent,
    GoogleAuthComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '535029787150-5j1gkkbe5q1t4qjkrpshi3mfh3j5ah7l.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
