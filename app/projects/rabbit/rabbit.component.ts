import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {RabbitDashboardComponent} from './pages/dashboard/dashboard.component'

@Component({
    template:  `
    <h2>Rabbit project</h2>
    <router-outlet></router-outlet>
  `,
    directives: [RouterOutlet]
})

@RouteConfig([
    {
        path: '/',
        name: 'RabbitDashboard',
        component: RabbitDashboardComponent,
        useAsDefault: true
    }
])

export class RabbitComponent {
}