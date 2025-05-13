import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  standalone: false,
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.css'
})


export class Parent1Component {
  data:number=0
  display(p:any){
    this.data=p

  }
  x:any={
    name1:'',
    addr:''
  }

  sd(){
    let in1=(document.getElementById('in1') as HTMLInputElement).value
    let in2=(document.getElementById('in2') as HTMLInputElement).value

    this.x.name1=in1
    this.x.addr=in2
    console.log(this.x);
    

  }

}
