import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _queryParams: any;
  get queryParam(): any {
    return this._queryParams;
  }
  set queryParam(params: any) {
    this._queryParams = params;
  }
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  public fetchQueryParams = () => {
    let queryParam: any;
    this._activatedRoute.queryParamMap.subscribe(params => {
      queryParam = params;
    });

    return queryParam;
  }

  public navigateUrlWithQueryParams = (url: any, params: any) => {
    this._router.navigate(url, params);
  }
}
