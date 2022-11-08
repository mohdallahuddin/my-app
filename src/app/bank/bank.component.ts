import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";

  constructor(private _bankService:BankService,private router:Router) { 


      this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
      )
  
    }
  

  ngOnInit(): void {
  }
  filter(){
    this._bankService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
   
  }
  pagination(page:number){
    this._bankService.getPageddAccounts(page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )

    }
    sort(){
      this._bankService.getSortedAccounts(this.column,this.order).subscribe(
        (data:any)=>{
          this.accounts = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    delete(id:string){
      this._bankService.deleteAccount(id).subscribe(
        (data:any)=>{
          alert("deleted successfully!!!");
          location.reload();
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
    }
    
    view(id:string){
      this.router.navigateByUrl('/dashboard/bank-details/'+id);
    
    }
    edit(id:string){
      this.router.navigateByUrl('/dashboard/edit-account/'+id);
}
}
