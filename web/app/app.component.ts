import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from './home/my.home';
import {MyUserSignIn} from './user/my.user.signin';
import {MyUserSignUp} from './user/my.user.signup';
import {LoggedInRouterOutlet} from './common/loggedInOutlet';

@Component({
	selector: 'my-app',
	// template: '<a [routerLink]="[\'Home\']">Home</a><br/>' +
	// '<a [routerLink]="[\'MyUserSignIn\']">Signin</a><br/>' +
	// '<a [routerLink]="[\'MyUserSignUp\']">Signup</a><br/>' +
	// '<router-outlet></router-outlet>',
	template: '<router-outlet></router-outlet>',
	directives: [LoggedInRouterOutlet]
})

@RouteConfig([
	{ path: '/', redirectTo: ['/Home']},
	{ path: '/home', name: 'Home', component: Home},
	{ path: '/signin', name: 'MyUserSignIn', component: MyUserSignIn },
	{ path: '/signup', name: 'MyUserSignUp', component: MyUserSignUp }
	])
export class AppComponent {
	constructor(public router: Router) {
	}
}
