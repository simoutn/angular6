import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  heroes = HEROES;
 selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() { }

  ngOnInit() {
  }

}
