import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';


import { HomeComponent } from './home.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes),
],
    exports: [RouterModule]
})
export class HomeRoutingModule { }