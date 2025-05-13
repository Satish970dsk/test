import { Component, Injector } from '@angular/core';
import { MathService } from '../math.service';
import { DataserviceService } from '../dataservice.service';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[MathService]
})
export class HomeComponent {

  result:string=''
  obj:any
  c!:string[]
  // c1
  a:number=20
  b:number=30
  heading:string='welcome to home page'
  st:string='test debugging'
  bg:string='background:red'
  fg:string='color:yellow'
  n:number = 1
  polyname="sdf";
  constructor(private i:Injector){
    //this.result=obj.addNums(10,20)
    // this.c=ob.countrynames()
    // ob:DataserviceService
    //  this.obj=i.get(MathService)
    //  this.c1=i.get(DataserviceService)
    //  this.c=this.c1.countrynames()
     this.obj=i.get(CounterserviceService)
     this.n=this.obj.num
     
    //  this.obj.divideNums(10,0)
    //  this.obj.validateAge(10)
    // this.c.forEach(e=>{
    //   console.log(e);
      
    // })
    // this.c.map(e=>{
    //   console.log(e);
    // })
    // this.result='the sum is: '+this.a+this.b
    // this.result='the sum is: '+this.a+this.b

  }
  
  add(){
    this.result=this.obj.addNums(10,20)
  }
  func1(){
    
    this.n=this.obj.increment()
    
    
  }
  func2(){
    this.n=this.obj.decrement()
  }

  hasstyle:boolean=false;
    func(){
      let add = (document.getElementById('add') as HTMLInputElement).checked
      let remove = (document.getElementById('remove') as HTMLInputElement).checked
      // let content = (document.getElementById('content')as HTMLDListElement)

      if(add){
        this.hasstyle=true
      }
      else{
        this.hasstyle=false
      }
      // console.log(add,remove);
      
    }
    r:boolean=false
    r1:boolean=false
    r2:boolean=false
    r3:boolean=false
    r4:boolean=false
   
    task2(){
      let c1 = (document.getElementById('color') as HTMLInputElement).checked
      let c2 = (document.getElementById('backcolr') as HTMLInputElement).checked
      let c3 = (document.getElementById('bold') as HTMLInputElement).checked
      let c4 = (document.getElementById('italic') as HTMLInputElement).checked
      let c5 = (document.getElementById('border') as HTMLInputElement).checked

      if(c1){
        this.r=true
      }
      else{
        this.r=false
      }
      if(c2){
        this.r1=true
      }
      else{
        this.r1=false
      }
      if(c3){
        this.r2=true
      }
      else{
        this.r2=false
      }
      if(c4){
        this.r3=true
      }
      else{
        this.r3=false
      }
      if(c5){
        this.r4=true
      }
      else{
        this.r4=false
      }

    }


   

}
