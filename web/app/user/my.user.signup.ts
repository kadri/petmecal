import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http } from 'angular2/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'signup'
})
@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: './app/user/my.user.signup.html'
})
export class MyUserSignUp {
  constructor(public router: Router, public http: Http) {
  }

  signup(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    console.log(body);
    this.http.post('/api/register', body, { headers: contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem('jwt', response.json().data);
        this.router.parent.navigateByUrl('/home');
      },
      error => {
        //alert(error.text());
        console.log(error);
      }
      );
  }

  signin(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signin');
  }

}
