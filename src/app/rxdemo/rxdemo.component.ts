import { Component } from '@angular/core';
import { from, fromEvent, interval, Observable } from 'rxjs';
import { StudentsdetService,Istudents } from '../studentsdet.service';


@Component({
  selector: 'app-rxdemo',
  standalone: false,
  templateUrl: './rxdemo.component.html',
  styleUrl: './rxdemo.component.css'
})
export class RxdemoComponent {
  
  stuarray:Istudents[]=[]
  x=false
  std!:Istudents
  error:any

  constructor(public ob:StudentsdetService){

  }
  displaystudents()
  {
    // this.ob.readstudents().subscribe(results => this.stuarray=results)
      // result will have all students data
this.ob.readstudents().subscribe({
  next: (res) => this.stuarray = res,
  error: (err) => this.error = err.message
});


  }

  display(){
    let id = (document.getElementById('u') as HTMLInputElement).value
    this.ob.readstudentsbyid(id).subscribe(res=>{this.std=res
      this.x=true
  })
    
  }
  id:any
  id1:any
  id2:any
  name:any
  marks:any
  name1:any
  marks1:any

  addnewstudents(){
    var res =
 	 {  "id":"", 
	    "studentname":"", 
	    "totalmarks":""
	 }
   res.id=this.id
   res.studentname=this.name
   res.totalmarks=this.marks
   this.ob.addstudents(res).subscribe(res=>{
    alert('data added successfully')
   })
  }
  deletestd(id:any){
    this.ob.delectebyid(id).subscribe(res=>{
      alert('student deleted successfully')
    })
  }

  updatestudents(){
    var res =
 	 {  "id":"", 
	    "studentname":"", 
	    "totalmarks":""
	 }
   res.id=this.id2
   res.studentname=this.name1
   res.totalmarks=this.marks1
   this.ob.updatestd(this.id2,res).subscribe(res=>{
    alert('data updated successfully')
   })
  }

  fd!:any[]
  
  fromdemo(){
    // logic to exports the data
    // from returns observable type
    // alert('kdf')
    let country =from(['india','canada','us','uk'])
    country.subscribe(item=>{
      console.log('data: '+ typeof item);
   
    })
  }
 intervaldemo(){
      const timer$=interval(1000)

      timer$.subscribe(val=>{
        console.log('interval value: ',val);
        
      })
  }
 
  fromeventdemo(){
    const btn = document.getElementById('clickbtn')!
    const click$=fromEvent(btn,'click')

    click$.subscribe(()=>{
      console.log('button clicked');
      
    })
  }

  observabledemo(){
    // emits a data in asynchrounsly
    let ob = new Observable(o =>{
      o.next('hello') // sends data or emits to the subscriber 1 by 1
      o.next('world') 
      o.complete() // represents end of the list
    })
    // read data 1 by 1
    ob.subscribe({next: val=>console.log(val),
      //message to be printed once list is completed
      complete: ()=>console.log('done')

    })
  }
}
