import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavigationComponent } from './dashbord/navigation/navigation.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, pathMatch: 'full', children:
      [
        {  path: '', pathMatch: 'full', redirectTo: 'home'},
        { path: 'home', component: HomeComponent },
        { path: 'login', component: UserComponent },
        { path: 'about', component: AboutComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },


  {
    path: 'dashbord', component: NavigationComponent, children: [
      // { path: '', component: NavigationComponent },
      { path: 'addarticle', component: AddarticleComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
