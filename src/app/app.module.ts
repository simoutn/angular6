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
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddarticleComponent } from './addarticle/addarticle.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    RegisterComponent,
    AddarticleComponent
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

  providers: [AdunitService],
  bootstrap: [AppComponent],
})
export class AppModule { }
