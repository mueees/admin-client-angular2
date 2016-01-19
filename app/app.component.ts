import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SecurityService} from './security/security.service'
import {RabbitComponent} from './projects/rabbit/rabbit.component';
import {CalendarComponent} from './projects/calendar/calendar.component';

@Component({
    selector: 'app',
    template: `
        <h1>My First Angular 2 App</h1>
        <a [routerLink]="['RabbitProject']">Rabbit</a>
        <a [routerLink]="['CalendarProject']">Calendar</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/rabbit/...',
        name: 'RabbitProject',
        component: RabbitComponent,
        useAsDefault: true
    },
    {
        path: '/calendar',
        name: 'CalendarProject',
        component: CalendarComponent
    }
])

export class AppComponent {
    constructor(private securityService:SecurityService) {

    }
}