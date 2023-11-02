import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-moviedetailes',
  templateUrl: './moviedetailes.component.html',
  styleUrls: ['./moviedetailes.component.css']
})
export class MoviedetailesComponent {
  constructor(private models:MoviesService, private _activateroute:ActivatedRoute) {  }
  moveidetailes:any
  moviedetailesId:string=''
  imageprefix="https://image.tmdb.org/t/p/w500"
  ngOnInit(): void {
    this.moviedetailesId=this._activateroute.snapshot.params['id']

    this.models.getmoviedetiles(this.moviedetailesId).subscribe({
      next:(response)=> this.moveidetailes=response
    })
  }
}
