import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from './models/students';
import { catchError,map,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private REST_API_URL = 'http://localhost:3500/api/students'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
   }
  constructor(private http: HttpClient) { }

  getStudents(): Observable<any>{
    return this.http.get(this.REST_API_URL,this.HTTP_HEADER).pipe(
      tap(students =>{
        console.log(students);
       }),
       catchError(error => of([]))
    )
  }

  createNewStudent(student:Student): Observable<Student>{
    return this.http.post<Student>(`${this.REST_API_URL}`,student,this.HTTP_HEADER).pipe(
      tap(newStudent =>{
        console.log(`this student = ${newStudent}`);
       }),
       catchError(error => of(new Student()))
    )
  }

  getstudentById(id:string): Observable<Student | any>{
    const thisUrl = `${this.REST_API_URL}/${id}`
    return this.http.get<Student>(thisUrl).pipe(
      tap(student =>{
        console.log(`this student = ${student.name}`);
       }),
       catchError(error => of(new Student()))
    )
  }


  updateStudent(student: Student):Observable<Student>{
    return this.http.put<Student>(`${this.REST_API_URL}${student._id}`,student,this.HTTP_HEADER).pipe(
      tap(updatedStudent =>{
        console.log(`this Movie = ${updatedStudent}`);
       }),
       catchError(error => of(new Student()))
    )
  }

  deleteStudent(id:string){
    return this.http.delete<Student>(`${this.REST_API_URL}${id}`, this.HTTP_HEADER).pipe(
      tap(deleteStudent=>{
        console.log(`deleted Student= ${deleteStudent.name}`)
      }),
      catchError(error => of(new Student()))
    )
  }

}



