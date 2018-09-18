import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../services/test.service';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users: User[];
  newUser: any = {};
  formUserLogin: FormGroup;

  // it will be stored under ${prefix}viewCounts name
  @LocalStorage() viewCounts = 0;
  // this under name: ${prefix}differentLocalStorageKey
  @LocalStorage('differentLocalStorageKey') userName = '';
  // it will be stored under ${prefix}itWillBeRemovedAfterBrowserClose in session storage
  @SessionStorage({ key: 'itWillBeRemovedAfterBrowserClose' }) previousUserNames: Array<string> = [];
  // it will be read from cookie 'user_id' (can be shared with backend) and saved to localStorage and cookies after change
  @LocalStorage() @CookieStorage({ prefix: '', key: 'user_id' }) userId = '';
  // it will be stored in a cookie named ${prefix}user_workspaces for 24 hours
  @CookieStorage({ key: 'user_workspaces', expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) }) userWorkspaces = [];


  constructor(private router: Router, private testService: TestService) {

    this.formUserLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });


    this.viewCounts++;
    this.userName = 'some name stored in localstorage';
    this.previousUserNames.push(this.userName);
    for (const userName of this.previousUserNames) {
      console.log(userName);
    }
    this.previousUserNames.map(userName => userName.split('').reverse().join(''));

  }

  ngOnInit() {
  }
  loginBtn(form) {
    console.log(form);
    if (form.valid) {
      this.testService.loginUser(form.value).subscribe(res => {
        console.log(res.json().userToken);
        if (res.status === 200) {
          localStorage.setItem('token', res.json().userToken);
          this.router.navigateByUrl('/admin/newarticle');
        }
      });
    }
  }
}
