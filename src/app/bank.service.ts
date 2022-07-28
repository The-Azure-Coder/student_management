import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map,tap } from 'rxjs';
import { Observable, of } from 'rxjs';
import { BankDetail } from './models/bankingDetails';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  private REST_API_URL = 'http://localhost:4000/bankingDetails'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
   }

  constructor( private http: HttpClient) { }

  getBankingDetails(): Observable<BankDetail[]>{
    return this.http.get<BankDetail[]>(this.REST_API_URL, this.HTTP_HEADER)
  }

  getAccountById(id: string): Observable<BankDetail>{
    return this.http.get<BankDetail>(`${this.REST_API_URL}/find/${id}`, this.HTTP_HEADER)
  }

  addBankingDetail(detail:BankDetail): Observable<BankDetail>{
    return this.http.post<BankDetail>(`${this.REST_API_URL}/create`,detail,this.HTTP_HEADER)
}

updateBankingDetail(detail:BankDetail): Observable<BankDetail>{
  return this.http.put<BankDetail>(`${this.REST_API_URL}/update/${detail._id}`, detail, this.HTTP_HEADER)
}

deleteBankingDetail(id:string): Observable<BankDetail>{
  return this.http.delete<BankDetail>(`${this.REST_API_URL}/delete/${id}`,this.HTTP_HEADER)
}


}

