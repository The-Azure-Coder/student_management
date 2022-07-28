import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  createAccount = new FormGroup({
    'accountNumber': new FormControl(''),
    'bank': new FormControl(''),
    'branch': new FormControl(''),
    'status': new FormControl(''),
    'studentID': new FormControl(''),
    'accountType': new FormControl(''),
    })

  constructor(private bankService: BankService, private studentservice: StudentsService,private router: Router) { }

  newAccount():void{
    this.bankService.addBankingDetail(this.createAccount.value).subscribe({
      next:(res)=>{
        alert('Student created successfully')
        console.log(this.createAccount.value)
        this.router.navigate(['/bankDetails']);
      },
      error: ()=>{
        alert('error creating Account')
      }
    })
  }

  ngOnInit(): void {
  }

}
