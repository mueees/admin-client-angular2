import {Router} from 'angular2/router'
import {Injectable} from 'angular2/core';
import {AuthenticationService} from './authentication.service'

@Injectable()
export class SecurityService {
    constructor(public authenticationService:AuthenticationService, private router:Router) {
        router.subscribe(function (val) {
            console.log(val);
        });
    }
}