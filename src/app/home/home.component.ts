import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Title, Meta } from '@angular/platform-browser';
import { HttpParams } from "@angular/common/http";

// import { LoginModalService } from '../views/login-component/login-modal.service';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
// import { CommonService } from '../services/common.service';
import { HomepageService } from './services/homepage.service';
// import * as $ from 'jquery';
declare var sm2BarPlayers: any;
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
 
  cdnUrl = environment.cdnUrl;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
