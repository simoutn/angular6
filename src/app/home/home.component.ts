import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// msg: string;
  constructor(private testService: TestService) { }

  ngOnInit() {
   /* this.gethello();*/
  }
/*
  gethello() {
    this.testService.getHelloword().subscribe(res => {
      console.log(res);
      this.msg = res.text();
    });

  }
*/
}
