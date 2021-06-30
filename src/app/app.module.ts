import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './views/header-component/header-component.component';
import { FooterComponentComponent } from './views/footer-component/footer-component.component';
import { LoginComponent } from './login-pages/login/login.component';
import { SignupComponent } from './login-pages/signup/signup.component';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
  BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
