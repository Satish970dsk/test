import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buypag',
  standalone: false,
  templateUrl: './buypag.component.html',
  styleUrl: './buypag.component.css'
})
export class BuypagComponent {

  pid:string=''
  pname:string=''
  price:number=0
  des:string=''
  image:string=''
  q:number=1

  constructor(public ob:ActivatedRoute){

    // load assign the value for a variable
    // value comes from query string
    // subscribe method will load the data
    // in the url there are may query parameters are there in the form of key value pair
    // subscribe method will read all keyvalues 
  
    ob.queryParams.subscribe(data =>{
      this.pid=data['a'],
      this.pname=data['b'],
      this.price=data['d'],
      this.des=data['c'],
      this.image=data['e']

    })
    
  }



}
