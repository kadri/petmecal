import { Component, View } from 'angular2/core';
import { Http } from 'angular2/http';
import { contentHeaders } from '../common/headers';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'my-users',
  templateUrl: './app/user/my.users.html'
})

export class MyUsers {
  public users;
  constructor(public http: Http, public authHttp: AuthHttp) {
    this.refreshUserList();
  }

  refreshUserList():void {
    if (localStorage.getItem("jwt") !== null) {
      this.authHttp.get('/api/users', { headers: contentHeaders })
        .subscribe(
        response => {
          this.users = response.json().data;
        },
        error => {
          //alert(error.text());
          console.log(error);
        }
        );
    }
  }
}
