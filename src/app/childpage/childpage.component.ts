import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childpage',
  standalone: false,
  templateUrl: './childpage.component.html',
  styleUrl: './childpage.component.css'
})
export class ChildpageComponent {

  @Input() message:string='hello'

  ngOnChanges(st: SimpleChanges){
    console.log(st[1])
    
  }

  ngOnInit(){
    //only once in life time
    //initialization
    //connetion to db
    //initialize properties
    console.log('init function called')
  }


  ngDoCheck(){
    // never write any long code here 
    // else u will face performence issue
    console.log('do check method called');
    
  }

  ngOnDestroy(){
    // code to destroy object
    // disconnect from database
    // any cleanup code goes here
    console.log('component does not exist');
    
  }
  test(){
    alert('hello')
  }
  test1(){
    alert('welcome')
  }

  

}
