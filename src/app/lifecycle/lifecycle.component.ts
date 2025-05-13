import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: false,
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  d:string=''
  showdata(){
  let res = (document.getElementById('t1') as HTMLInputElement).value
  this.d=res
 }

 p:boolean=true
 show(){
  this.p=!this.p
 }
}
