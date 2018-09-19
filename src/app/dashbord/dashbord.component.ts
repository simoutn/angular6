import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  isLoggedIn;
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.isLoggedIn = this.testService.isLoggedIn();
  }

}
