import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
 // Articles: Article[];
  newArticle: any = {};
  formArticle: FormGroup;

  constructor(private router: Router, private testService: TestService) {
    this.formArticle = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl(''),
    });

  }
  ngOnInit() {
  }
  registerBtn(form) {
    console.log(form);
      this.testService.addArticle(form.value).subscribe(res => {
        console.log(res);
        if (res.status === 200) {
          this.router.navigateByUrl('');
        }
      });

  }
}
