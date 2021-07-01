import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login-pages/login/login.component';
import { SignupComponent } from './login-pages/signup/signup.component';
import { OrderComponent } from './home/order/order.component';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path: '', pathMatch: 'full', component: OrderComponent},
  {path: '', pathMatch: 'full', component: SideMenuComponent},
  {path: '', pathMatch: 'full', component: MainComponent},

  {
    path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent,
    
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
    ]

  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
