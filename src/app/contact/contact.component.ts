import { Component, Injector } from '@angular/core';
import { MathService } from '../math.service';
import { CounterserviceService } from '../counterservice.service';
import { GreetserviceService } from '../greetservice.service';
import { TimeserviceService } from '../timeservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkalphabet } from './uservalidation';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MathService],
})
export class ContactComponent {
  n!: number;
  obj;
  obj1;
  x: string = '';
  f:any
  constructor(private i: Injector) {
    this.obj = i.get(CounterserviceService);
    this.obj1 = i.get(GreetserviceService);
    this.n = this.obj.num;
    // model driven form
   
    this.f=new FormGroup({
      uname:new FormControl('',[Validators.required, Validators.pattern('[a-z]+')]),
      em:new FormControl('',[Validators.required, Validators.email]),
      msg:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      address:new FormControl('',[checkalphabet])

      
    })
  }

  sub:boolean=false
  validate(){
   
    return this.sub=true
    
  }
  func1() {
    this.n = this.obj.increment();
  }
  func2() {
    this.n = this.obj.decrement();
  }
  //
  func3() {
    let t1 = (document.getElementById('t1') as HTMLInputElement).value;
    this.x = this.obj1.greet(t1);
  }
 

  
  
}
