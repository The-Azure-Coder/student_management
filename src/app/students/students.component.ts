import { Component, OnInit } from '@angular/core';
import { Student } from '../models/students';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  students!: Student[]

  constructor(private studentsService: StudentsService) { }

  getStudentsFromService():void{
    this.studentsService.getStudents().subscribe(response=>{
      this.students = response.data.getStudents
      console.log(`this Students is ${JSON.stringify(this.students)}`)
    })
  }

  deleteStudent(id:string): void{
    this.studentsService.deleteStudent(id).subscribe({
      next:(res)=>{
        alert('Student deleted successfully')
        this.getStudentsFromService()
      },
      error:()=>{
        alert("Error while deleting the student")
      }
    })
  }

  ngOnInit(): void {
    this.getStudentsFromService()
  }

}
