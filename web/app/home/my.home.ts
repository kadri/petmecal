import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router } from 'angular2/router';
import { MyUsers } from './../user/my.users';

@Component({
	selector: 'home'
})
@View({
	directives: [CORE_DIRECTIVES, MyUsers],
	templateUrl: './app/home/my.home.html'
})
export class Home {
	jwt: string;
	decodedJwt: string;
	response: string;
	api: string;

	constructor(public router: Router, public http: Http) {
		this.jwt = localStorage.getItem('jwt');
	}

	logout(event) {
		localStorage.removeItem('jwt');
		this.router.parent.navigateByUrl('/signin');
	}
}
