import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbordnav',
  templateUrl: './dashbordnav.component.html',
  styleUrls: ['./dashbordnav.component.css']
})
export class DashbordnavComponent implements OnInit {

  isLoggedIn;
  isLoggedOut;
  private router: Router;
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.isLoggedIn = this.testService.isLoggedIn();
  }
  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('id', '');
    this.router.navigateByUrl('./login');
   // this.router.navigateByUrl('/login');
  }
}
