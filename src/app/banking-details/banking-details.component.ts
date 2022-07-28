import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { BankDetail } from '../models/bankingDetails';

@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.component.html',
  styleUrls: ['./banking-details.component.scss']
})
export class BankingDetailsComponent implements OnInit {
 bankDetails!:BankDetail[]
  constructor( private bankService: BankService) { }

  getBankingDetailsFromService(): void{
    this.bankService.getBankingDetails().subscribe((bankInfo)=>{
      this.bankDetails = bankInfo
      console.log(this.bankDetails);
    })
  }

  deleteBankingDetailFromService(id:string): void{
    this.bankService.deleteBankingDetail(id).subscribe({
      next:()=>{
        alert('bankDetails successfully deleted')
        this.getBankingDetailsFromService()
      },
      error:()=>{
        alert('error deleting account')
      }
    })
  }

  ngOnInit(): void {
    this.getBankingDetailsFromService()
  }

}
