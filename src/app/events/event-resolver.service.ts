import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared';

@Injectable()
export class EventResolver implements Resolve<any> {

  constructor(private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    // tslint:disable-next-line: no-string-literal
    return this.eventService.getEvent(route.params['id']);
  }
}
