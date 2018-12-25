import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AppConfigService, RouterService } from 'src/app/core/services';
import { HomeService } from '../../services';
import { Customer, Column, FieldConfig } from './../../../../shared';
import {
  deepCopy,
  sortData,
  filterRecord
} from './../../../../shared/utils/utils';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  placeholder: string;
  buttonText: string;
  customerData: Customer[] = [];
  coloumnConfig: Column[];
  page = 1;
  count: number;
  perPage = 10;
  pagesToShow: number;
  pageLimitArray: any[];
  fields: FieldConfig;
  formData: Customer;
  openModal = false;
  queryParams: any;
  searchVal: string;
  sortIndex: string;
  constructor(
    private _configService: AppConfigService,
    private _componentService: HomeService,
    private _routerService: RouterService,
    private _activatesRoute: ActivatedRoute
  ) {
    this.placeholder = 'Search';
    this.buttonText = 'Search';
  }

  ngOnInit() {
    this._paintGrid();
    // this._fetchQueryParams();
    this._paintPagination();
    this._popuplateCustomerInfo();
  }

  private _fetchQueryParams = () => {
    this.queryParams = this._routerService.fetchQueryParams();
    if (this.queryParams && this.queryParams.params && Object.keys(this.queryParams.params).length > 0) {
      const params = this.queryParams.params;
      this.page = params.page;
      this.perPage = params.perPage;
      this.search = params.search;
      this.sortIndex = params.sortIndex;
    }

    this.updateParams({
      page : this.page,
      perPage : this.perPage,
      search : this.searchVal,
      sortIndex : this.sortIndex
    });

    this._paintGrid();
  }

  private _paintPagination = () => {
    this.pagesToShow = 3;
    this.pageLimitArray = [5, 10, 20, 50];
  }

  private _popuplateCustomerInfo = () => {
    this._componentService
      .fetchCustomerInfo()
      .subscribe(() => this._populateCustomersData());
  }

  private _populateCustomersData = () => {
    const data = deepCopy(this._componentService.customerData);
    // const page = this.page === 1 ? 0 : this.page;
    // const startIndex = page * this.perPage;
    // const endIndex = startIndex + this.perPage;
    // data.slice(startIndex, endIndex);
    this.customerData = data;
    this.count = data.length;
  }

  private _paintGrid = () => {
    const gridConfig = this.fetchReferenceData('Grid');

    this.coloumnConfig = sortData(gridConfig, true, 'order');
  }
  /**
   * search
   */
  public search = (val: string) => {
    const refData = this.fetchReferenceData('GlobalSearch');

    (environment.serverSearch) ? this.serverSideSearch(val, refData) : this.clientSideSearch(val, refData);

  }
  /**
   * serverSideSearch
   */
  public serverSideSearch = (val: string, ref: any) => {
    /**
     * TODO : TO implement server side implementation
     */
  }
  /**
   * clientSideSearch
   */
  public clientSideSearch = (val: string, ref: any) => {
    let data = this._componentService.customerData;

    this.customerData = data.filter((item: any) => {
        let available = false;
        ref.forEach((search: any) => {
          available = available || item[search['name']].toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
        return available;
    });

    data = null;
  }
  public editRecord = (val: Customer) => {
    const refData = this.fetchReferenceData('CustomerForms');

    this.fields = filterRecord(
      refData,
      'CustomerType',
      val.type
    );
    this.formData = val;
    this.openModal = true;
  }

  public updateCustomerInfo = (formObj: any) => {
    this.customerData = [];
    // this.page = 1;
    // this.updateParams({
    //   page : this.page,
    //   perPage : this.perPage,
    //   search : this.searchVal,
    //   sortIndex : this.sortIndex
    // });
    this._popuplateCustomerInfo();
  }

  public fetchReferenceData = (key: string): any => {
    const refData = this._configService.refData;
    return refData[key] ? refData[key] : [];
  }
  public triggerSort = (col: Column) => {
    /**
     * (environment.serverSearch) based on this parameter we can do server side sort funcitonality
     */
    const data = this.customerData;
    this.customerData = sortData(data, col['sortingDirection'] === 'asc' ? true : false, col['dataIndex']);
  }
  public updateParams = (params: any) => {
    this._routerService.navigateUrlWithQueryParams([], {
      relativeTo: this._activatesRoute,
      queryParams: params,
      skipLocationChange: false
    });
  }
}
