import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from './home/my.home';
import {MyUserSignIn} from './user/my.user.signin';
import {MyUserSignUp} from './user/my.user.signup';
import {LoggedInRouterOutlet} from './common/loggedInOutlet';
import {MyAnimals} from './animals/my.animals';
import {MyVaccinations} from './definitions/my.vaccinations';
import {MyDefinitions} from './definitions/my.definitions';

@Component({
	selector: 'my-app',
	templateUrl: '/app/app.component.html',
	directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet]
})

@RouteConfig([
	{ path: '/', redirectTo: ['/Home']},
	{ path: '/home', as: 'Home', component: Home},
	{ path: '/signin', as: 'Signin', component: MyUserSignIn },
	{ path: '/signup', as: 'Signup', component: MyUserSignUp },
	{ path: '/animals', as: 'Animals', component: MyAnimals },
	{ path: '/definitions', as: 'Definitions', component: MyDefinitions }
	])
export class AppComponent {
	constructor(public router: Router) {
	}

	logout() {
		console.log('logout');
		localStorage.removeItem('jwt');
		this.router.navigateByUrl('/signin');
	}
	isLoggedin() {
		if (localStorage.getItem('jwt'))
			return true;
		else
			return false;
	}
}
