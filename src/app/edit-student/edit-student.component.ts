import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StudentsService } from '../students.service';
import { Student } from '../models/students';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  @Input() student!: Student

  studentSub!: Subscription;
  studentId!: string;
  routeSub!: Subscription;

  getStudentFromParams(id: string): void {
   this.studentSub= this.studentsService.getstudentById(id).subscribe(theStudent=>this.student = theStudent)
    console.log(this.student)
  }

  goBack(): void {
    this.location.back();

  }

  update(){
    this.studentsService.updateStudent(this.student).subscribe(()=>this.router.navigate(['/students']));
  }

  constructor(private route: ActivatedRoute, private location: Location, private studentsService: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.studentId = params['id'];
      this.getStudentFromParams(this.studentId);
  })
}
}
