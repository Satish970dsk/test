import { Component, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent ',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a:string='hello satish'
  data:string='' // comes from child component
  @ViewChild("d1") st!:ElementRef

  changesettings(){
    this.st.nativeElement.innerText="I am Satish kumar"
    this.st.nativeElement.style.color="white"
    this.st.nativeElement.style.backgroundColor="red"
    this.st.nativeElement.classList.add("text-center")
  }
  display(p:any){
    this.data=p
  }
}
