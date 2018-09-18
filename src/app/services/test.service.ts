import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: Http) { }

  getHelloword() {
    return this.http.get('http://localhost:3000');
  }

  registerUser(user) {
    return this.http.post('http://localhost:3000/auth/register', user);
  }
  loginUser(user) {
    return this.http.post('http://localhost:3000/auth/login', user);
  }
  addArticle(article) {
    return this.http.post('http://localhost:3000/admin/newarticle', article);
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
