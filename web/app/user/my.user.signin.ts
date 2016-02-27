import {Component} from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import { contentHeaders } from '../common/headers';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from '../home/my.home';

@Component({
	selector: 'my-user-signin',
	templateUrl: './app/user/my.user.signin.html',
	directives: [ROUTER_DIRECTIVES]
})
export class MyUserSignIn { 

	constructor(public http: Http, public router: Router) {
	}
	signin(event, email, password) {
		event.preventDefault();
		let body = JSON.stringify({ email, password });
		this.http.post('/api/login', body, { headers: contentHeaders })
			.subscribe(
			response => {
				localStorage.setItem('jwt', response.json().data);
				this.router.parent.navigateByUrl('/home');
			},
			error => {
				alert(error.text());
				console.log(error.text());
			}
			);
	}
	create(event){
		this.router.parent.navigateByUrl('/signup');
	}

}

