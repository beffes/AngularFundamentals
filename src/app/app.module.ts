import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpVoteComponent,
  DurationPipe,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';

import { JQ_TOKEN, // TOASTR_TOKEN, Toastr,
        ToastrService,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective} from './common/index';

import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: no-string-literal
// const toastr: Toastr = window['toastr'];
// tslint:disable-next-line: no-string-literal
const jQuery = window['$'];

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidator,
    DurationPipe
  ],
  providers: [
    AuthService,
    EventService,
    ToastrService,
    VoterService,
    EventResolver,
    // { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
