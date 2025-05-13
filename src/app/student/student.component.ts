import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  ex=0
  sub:boolean=false
  validate(p:any){
    
    // console.log(p.valid);
    
    return this.sub=true
    
  }
}
