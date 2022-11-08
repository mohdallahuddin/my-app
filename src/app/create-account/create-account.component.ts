import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
 
  public accountForm: FormGroup = new FormGroup(
    {
      createAt: new FormControl(),
      account_name:new FormControl(),
      available_balance:new FormControl(),
      currency:new FormControl(),
      user_image: new FormControl(),
      account_number:new FormControl()
    
        }
  )

  public id:string = "";

  constructor(private _bankService:BankService,private activatedRoute:ActivatedRoute) {
    
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        this._bankService.getAccount(this.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue( data );
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }
  submit(){
    if(this.id){
      //edit
      this._bankService.updateAccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Updated successfully");
        },
        (err:any)=>{
          alert("Internal server error");
    }
      
    )
      
  }
else{
  //create
  this._bankService.createAccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("Created successfully");
    },
    (err:any)=>{
      alert("Internal server error");
       }    
      )
    }
  }
}