import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private models:MoviesService, private _activateroute:ActivatedRoute) {  }

  movies:any[]=[]
  persons:any[]=[]
  tv:any[]=[]

  Imageprefix:string="https://image.tmdb.org/t/p/w500"

  ngOnInit(): void {

    this.models.getmodel('movie').subscribe({
      next:(response)=> this.movies=response.results.slice(0,10)
    })
    this.models.getmodel('person').subscribe({
      next:(response)=> this.persons=response.results.slice(0,10)
    })
    this.models.getmodel('tv').subscribe({
      next:(response)=> this.tv=response.results.slice(0,10)
    })


  }

}
