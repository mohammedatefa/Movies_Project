import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthinticationService } from './../../authintication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _authintication:AuthinticationService,private _roouter:Router) {}
  isloading:boolean=false;
  errormessege:string="";
  loginform: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.email, Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    Password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)])
  });

  onlogin(dataform:FormGroup){
    if(this.loginform.valid){
      this.isloading=true
      this._authintication.login(dataform.value).subscribe({
        next:(response)=>{
          if(response.message==="Success"){
            this.isloading=false
            localStorage.setItem("userToken",response.token)
            this._authintication.savedata()
            this._roouter.navigate(['/home'])
          }else{
            this.errormessege=response.message
            this.isloading=false
          }
        }
      })
    }
  }
}
