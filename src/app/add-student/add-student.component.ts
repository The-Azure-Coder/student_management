import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  createStudent = new FormGroup({
    'name': new FormControl(''),
    'email': new FormControl(''),
    'cohort': new FormControl(''),
    'phoneNumber': new FormControl('')
    })

  constructor(private studentsService: StudentsService, private router: Router, private location: Location) { }

  newStudent():void{
    this.studentsService.createNewStudent(this.createStudent.value).subscribe({
      next:(res)=>{
        alert('Student created successfully')
        console.log(this.createStudent.value)
        this.router.navigate(['/students']);
      },
      error: ()=>{
        alert('error creating movie')
      }
    })
  }

  goBack(): void {
    this.location.back();

  }

  ngOnInit(): void {
  }

}
