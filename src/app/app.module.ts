import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service';
import { WebStorageModule } from 'ngx-store';
import { EditorModule } from '@tinymce/tinymce-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './main/nav/nav.component';
import { UserComponent } from './main/user/user.component';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './main/register/register.component';
import { AddarticleComponent } from './dashbord/addarticle/addarticle.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavigationComponent } from './dashbord/navigation/navigation.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    RegisterComponent,
    AddarticleComponent,
    DashbordComponent,
    NavigationComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    WebStorageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    EditorModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
