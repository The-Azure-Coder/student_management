import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'createStudent', component: AddStudentComponent},
  {path: 'students/find/:id', component: EditStudentComponent},
  {path: 'bankDetails', component: BankingDetailsComponent},
  {path: 'createAccount', component: AddAccountComponent},
  {path: 'bankDetails/find/:id', component: EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
