import { Component, OnInit } from '@angular/core';
import { AuthinticationService } from 'src/app/authintication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(private _authintication:AuthinticationService) {}
isLogin:boolean=false
username:any={}
  ngOnInit(): void {
    this._authintication.userdata.subscribe({
      next:()=>{
        if(this._authintication.userdata.getValue()!=null){
          this.isLogin=true
          this.username=this._authintication.userdata.getValue()
        }else{
          this.isLogin=false
        }
      }
    })
  }

  logout(){
    this._authintication.signout()
  }
}
