import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/shared/interface';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  _customerData: Customer[];

  set customerData(data: Customer[]) {
    this._customerData = data;
  }

  get customerData() {
    return this._customerData;
  }

  constructor(private _http: HttpClient) { }

  public fetchCustomerInfo = () => {
    return this._http
      .get<Customer[]>(`${environment.serverHostUrl}/customers`)
      .pipe(map((res: any) => this.customerData = res['data']));
  }
}
