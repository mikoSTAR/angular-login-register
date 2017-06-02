import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {

  }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        const user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
