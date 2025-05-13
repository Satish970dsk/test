import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    
  @Input() message:string=''
  @Output()
  myevent:EventEmitter<string> = new EventEmitter <string>

  executefunc(){

    this.myevent.emit('angular rocks!!')
  }
  @ContentChild('myid') st!:ElementRef
  changecontent(){
    this.st.nativeElement.style.color='red'
    this.st.nativeElement.style.backgroundColor='green'
  }
}
