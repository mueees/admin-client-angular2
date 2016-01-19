import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

import {SecurityService} from './security/security.service'
import {AuthenticationService} from './security/authentication.service'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    SecurityService,
    AuthenticationService
]);