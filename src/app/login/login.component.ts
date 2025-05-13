import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    err=''
    constructor(public r:Router){

    }
    validate(frm:any){
      // now from details contains in frm valiable
      if(frm.uname == 'admin' && frm.pwd=='india'){
        
        sessionStorage.setItem('uname',frm.uname)
        this.r.navigate(['products'])
      }
      else{
        this.err='invalid username or password!..'
      }
     
    }
}
