import { Component, Injector } from '@angular/core';
import { DataserviceService,Iproduct } from '../dataservice.service';
import { DiscountPipe } from '../discount.pipe';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

products:any
prod:any
constructor(private i:Injector){
    this.products=i.get(DataserviceService)
    this.prod=this.products.prod
}


  arr:string[]=['india','uk','canda','us']

  hide:boolean=false
  show:boolean=true
  task3(p:string){
      if(p=='h'){
        this.hide=true
        this.show=false
      }
      else{
        this.hide=false
        this.show=true
      }
  }

  hi(){
    console.log('hello');
    
  }
}
