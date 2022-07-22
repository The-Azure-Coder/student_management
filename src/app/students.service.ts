import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from './models/students';
import { catchError,map,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private REST_API_URL = 'http://localhost:4000/students'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
   }
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.REST_API_URL,this.HTTP_HEADER).pipe(
      tap(students =>{
        console.log(`recieved Students = ${students}`);
       }),
       catchError(error => of([]))
    )
  }

  createNewStudent(student:Student): Observable<Student>{
    return this.http.post<Student>(`${this.REST_API_URL}/create`,student,this.HTTP_HEADER).pipe(
      tap(newStudent =>{
        console.log(`this Movie = ${newStudent}`);
       }),
       catchError(error => of(new Student()))
    )
  }

  getstudentById(id:string): Observable<Student | any>{
    const thisUrl = `${this.REST_API_URL}/find/${id}`
    return this.http.get<Student>(thisUrl).pipe(
      tap(student =>{
        console.log(`this Movie = ${student.name}`);
       }),
       catchError(error => of(new Student()))
    )
  }


  updateStudent(student: Student):Observable<Student>{
    return this.http.put<Student>(`${this.REST_API_URL}/update/${student._id}`,student,this.HTTP_HEADER).pipe(
      tap(updatedStudent =>{
        console.log(`this Movie = ${updatedStudent}`);
       }),
       catchError(error => of(new Student()))
    )
  }

  deleteStudent(id:string){
    return this.http.delete<Student>(`${this.REST_API_URL}/delete/${id}`, this.HTTP_HEADER).pipe(
      tap(deleteStudent=>{
        console.log(`deleted Student= ${deleteStudent.name}`)
      }),
      catchError(error => of(new Student()))
    )
  }

}



