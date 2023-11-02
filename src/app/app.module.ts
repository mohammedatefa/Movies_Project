import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PeopleComponent } from './components/people/people.component';
import { TvComponent } from './components/tv/tv.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviedetailesComponent } from './components/moviedetailes/moviedetailes.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import{HttpClientModule}from'@angular/common/http';
import { AuthinticationService } from './authintication.service';
import { TvdetailesComponent } from './tvdetailes/tvdetailes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent,
    NotfoundComponent,
    TvdetailesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthinticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
