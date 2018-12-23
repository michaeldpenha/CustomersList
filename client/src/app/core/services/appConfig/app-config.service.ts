import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private _refData: any[];
  set refData(data: any) {
    this._refData = data;
  }
  get refData(): any {
    return this._refData;
  }
  constructor(private _http: HttpClient) {}

  private _loadAppRefData = () => {
    return this._http
      .get(`${environment.serverHostUrl}/refData`)
      .toPromise()
      .then(res => {
        this.refData = res['data'];
      });
  }

  public appInitializerFn = () => {
    return () => {
      return this._loadAppRefData();
    };
  }
}
