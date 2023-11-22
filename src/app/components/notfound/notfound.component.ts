import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
/**
 *
 */
constructor(private _router:Router) {

}
goto(){
  this._router.navigate(['/login'])
}
}
