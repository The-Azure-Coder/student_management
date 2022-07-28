import { Component,Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BankDetail } from '../models/bankingDetails';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
@Input() bankingDetails! : BankDetail
  bankingSub!: Subscription;
  bankingId!: string;
  routeSub!: Subscription;
  constructor( private bankService: BankService, private route: ActivatedRoute, private router: Router) { }

 
  getbankingDetailFromParams(id:string) :void{
    this.bankingSub = this.bankService.getAccountById(id).subscribe(account=>this.bankingDetails = account)
  }

  updateAccount(){
    this.bankService.updateBankingDetail(this.bankingDetails).subscribe(()=>{
      this.router.navigate(['/bankDetails'])
    })

  }

  ngOnInit(): void {
   
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.bankingId = params['id'];
      this.getbankingDetailFromParams(this.bankingId);
  })
}
}
