import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AuthinticationService } from 'src/app/authintication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private _Authintication:AuthinticationService,private _router:Router) {}

  isloading:boolean=false;
  errormessege:string="";
  regitretionform: FormGroup = new FormGroup({
    FirstName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    LastName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    // age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(80)]),
    Email: new FormControl(null, [Validators.email, Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    Password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)])
  });

onregister(dateform:FormGroup){
  this.isloading=true;

  if(this.regitretionform.valid){
    this._Authintication.signin(dateform.value).subscribe({
        next:(response)=>{
          this.isloading=false;
          if(response.message==="Success"){
              this._router.navigate(['/login'])
              this.isloading=false;
          }else{

              this.errormessege=response.message
              this.isloading=false;
          }

  }})

  }

}
goto(){
  this._router.navigate(['/login'])
}
}
