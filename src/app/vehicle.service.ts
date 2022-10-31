import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { VehicleComponent } from './vehicle/vehicle.component';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{

    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')

 
  }
  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);

  }
  getPagedVehicles(page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }
  getSortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?'+'?sortBy="+column+'&order='+order);
    }
  }



