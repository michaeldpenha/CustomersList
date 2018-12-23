import { ModalService } from './../../../../shared/components/modal/modal.service';
import { Component, OnInit } from '@angular/core';

import { AppConfigService } from 'src/app/core/services';
import { HomeService } from '../../services';
import { Customer, Column, FieldConfig } from './../../../../shared';
import { deepCopy, sortData, filterRecord } from './../../../../shared/utils/utils';

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
    const refData = this._configService.refData;
    const gridConfig = refData['Grid'] ? refData['Grid'] : [];

    this.coloumnConfig = sortData(gridConfig, true, 'order');
  }
  /**
   * search
   */
  public search = (val: string) => {
    console.log(val);
  }
  public editRecord = (val: Customer) => {
    const refData = this._configService.refData;

    this.fields = filterRecord(refData['CustomerForms'], 'CustomerType', val.type);
    this.formData = val;
    this.openModal = true;
  }

  public updateCustomerInfo = (formObj: any) => {
    console.log(formObj);
  }
}
