import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appName = 'Projet Haithem';
  isLoggedIn;
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.isLoggedIn = this.testService.isLoggedIn();
  }
}
