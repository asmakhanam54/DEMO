import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NavigationEnd,Router} from '@angular/router';
declare var ga: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'SkillBox – The Art Social Network';

  // SBloader:boolean

  constructor(
    private titleService: Title,
    private meta: Meta,
    public router: Router
) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      ga('set', 'page', event.urlAfterRedirects);
      ga('send', 'pageview');
    }
  });
}

ngOnInit() {
  // this.titleService.setTitle(this.title);
  // this.meta.addTag({name: 'keywords', content: 'musicians, bands, DJ/Producers, session artists, sound artist, Composer, find artist from India, find collaborate artists, performing arts center, indie, music, guitarists, drummers, independent musicians, venues, record labels, recording studios, jampads, sound vendors, light vendors'});
  // this.meta.addTag({name: 'description', content: 'SkillBox is an Art Community Platform that is constantly evolving – always conscious of the needs of artists and arts-related businesses.'});
}

}
