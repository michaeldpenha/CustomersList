import { ModalService } from './../../../../shared/components/modal/modal.service';
import { Component, OnInit } from '@angular/core';

import { AppConfigService } from 'src/app/core/services';
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
  page: number;
  count: number;
  perPage: number;
  pagesToShow: number;
  pageLimitArray: any[];
  fields: FieldConfig;
  formData: Customer;
  openModal = false;
  constructor(
    private _configService: AppConfigService,
    private _componentService: HomeService,
    private _modalService: ModalService
  ) {
    this.placeholder = 'Search';
    this.buttonText = 'Search';
  }

  ngOnInit() {
    this._popuplateCustomerInfo();
    this._paintGrid();
    this._paintPagination();
  }

  private _paintPagination = () => {
    this.page = 1;
    this.perPage = 10;
    this.pagesToShow = 3;
    this.pageLimitArray = [5, 10, 20, 50];
  }
  private _popuplateCustomerInfo = () => {
    this._componentService
      .fetchCustomerInfo()
      .subscribe(() => this._populateCustomersData());
  }
  private _populateCustomersData = () => {
    this.customerData = this._componentService.customerData;
    this.count = this.customerData.length;
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
}
