import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordnavComponent } from './dashbordnav.component';

describe('DashbordnavComponent', () => {
  let component: DashbordnavComponent;
  let fixture: ComponentFixture<DashbordnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
