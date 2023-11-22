import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthinticationService {

  constructor(private _httpclient:HttpClient,private router:Router) {
    if(localStorage.getItem("userToken")){
      this.savedata()
    }
  }

  userdata =new BehaviorSubject(null)

  savedata(){
    let encodingdata=JSON.stringify(localStorage.getItem("userToken"))
    let decodingdata:any=jwtDecode(encodingdata)
    this.userdata.next(decodingdata)
  }

  signin(formdata:object):Observable<any>{
    return this._httpclient.post(`https://localhost:44344/api/user/SignIn`,formdata)
  }
  login(formdata:object):Observable<any>{
    return this._httpclient.post(`https://localhost:44344/api/user/login`,formdata)
  }

  signout(){
    localStorage.removeItem("userToken")
    this.userdata.next(null);
    this.router.navigate(['/login'])
  }
}
