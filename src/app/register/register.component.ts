import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Users: User[];
  newUser: any = {};
  formUser: FormGroup;

  constructor(private router: Router, private testService: TestService) {
    this.formUser = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      role: new FormControl(''),
    });

  }

  ngOnInit() {
  }

  registerBtn(form) {
    console.log(form);
    if (form.valid) {
      this.testService.registerUser(form.value).subscribe(res => {
        console.log(res);
        if (res.status === 200) {
          this.router.navigateByUrl('/dashbord');
        }
      });
    }
  }

}
