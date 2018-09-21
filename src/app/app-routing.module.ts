import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './main/user/user.component';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './main/register/register.component';
import { AddarticleComponent } from './dashbord/addarticle/addarticle.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavigationComponent } from './dashbord/navigation/navigation.component';
import { NavComponent } from './main/nav/nav.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, pathMatch: 'full', children:
      [
        // { path: '', pathMatch: 'full', redirectTo: 'home'},
        { path: 'home', component: HomeComponent },
        { path: 'login', component: UserComponent },
        { path: 'about', component: AboutComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },


  {
    path: 'dashbord', component: NavigationComponent, children: [
      { path: 'addarticle', component: AddarticleComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
