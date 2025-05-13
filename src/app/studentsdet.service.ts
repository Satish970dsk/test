import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsdetService {

  constructor(public h:HttpClient) { 
    // h.get()R read data from server
    // h.post()C send data to server
    // h.put()U modify the data
    // h.delete()D delete data
  }

  readstudents()
  {
    let headers= new HttpHeaders({
      'accept':'application/xml'
    })
    return this.h.get<Istudents[]>('http://localhost:3000/students',{headers}).pipe(
      catchError(this.handleError)
      
    );
    
  }
  delectebyid(id:any):Observable<Istudents> 

  { 

    return this.h.delete <Istudents>('http://localhost:3000/students/'+id) 

  } 
  readstudentsbyid(id:any):Observable<Istudents>
  {
    
    return this.h.get<Istudents>('http://localhost:3000/students/'+id)
  }
  addstudents(data:any):Observable<Istudents>
  {

    return this.h.post<Istudents>('http://localhost:3000/students',data)
  }



  updatestd(id:any, data:any){
    return this.h.put<Istudents>('http://localhost:3000/students/'+id,data)
  }

  private handleError(error: HttpErrorResponse) {
  
    return throwError(() => new Error(error.message));
  }
  
}


export interface Istudents{
  id:number,
  studentname:string,
  totalmarks:number
}