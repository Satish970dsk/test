import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childpage1',
  standalone: false,
  templateUrl: './childpage1.component.html',
  styleUrl: './childpage1.component.css'
})
export class Childpage1Component {

  n:number=0;
  @Output()
  event1:EventEmitter <number>= new EventEmitter<number>

  executefunc(){
    this.event1.emit(this.n+=1)
  }

  @Input() name!:string
  @Input() addr!:string

  



}
