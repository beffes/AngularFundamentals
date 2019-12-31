import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display}}
    li > a.active { color: #F97924; }
  `
  ]
})

export class NavBarComponent {
  searchTerm: '';
  foundSessions: ISession[];

  constructor( public auth: AuthService, private eventService: EventService) {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe( (sessions: ISession[]) => {
      this.foundSessions = sessions;
    });
  }
}
