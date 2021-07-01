import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainComponent } from './main/main.component';
import { OrderComponent } from './order/order.component';
import { HomeRoutingModule } from './home-routing.modules';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    SideMenuComponent,
    MainComponent,
    OrderComponent
  ],
  imports: [
  CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
