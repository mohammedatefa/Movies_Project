import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private context:HttpClient) { }

  getmodel(model:string):Observable<any>{
    return this.context.get(`https://api.themoviedb.org/3/trending/${model}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }

  getmoviedetiles(id:string):Observable<any>{
    return this.context.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
}
