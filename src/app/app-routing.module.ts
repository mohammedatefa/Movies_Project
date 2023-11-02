import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { PeopleComponent } from './components/people/people.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './auth.guard';
import { MoviedetailesComponent } from './components/moviedetailes/moviedetailes.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'moveis',canActivate:[authGuard],component:MoviesComponent},
  {path:'tv',canActivate:[authGuard],component:TvComponent},
  {path:'people',canActivate:[authGuard],component:PeopleComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'movie/:id',canActivate:[authGuard],component:MoviedetailesComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
