import { AppConfigService } from './../../../../core/services/appConfig/app-config.service';
import { sortData } from './../../../../shared/utils/utils';
import { Customer } from './../../../../shared/interface/customer';
import { ModalComponent } from './../../../../shared/components/modal/modal.component';
import { FormComponent } from './../../../../shared/components/form/form.component';
import { ModalFormComponent } from './../../components/modal-form/modal-form.component';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
import { TupplesComponent } from './../../../../shared/components/tupples/tupples.component';
import { TableHeaderComponent } from './../../../../shared/components/table-header/table-header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {
  SearchComponent,
  IconSortComponent,
  DynamicFieldDirective
} from 'src/app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { HomeService } from '../../services';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SearchComponent,
        TableHeaderComponent,
        TupplesComponent,
        PaginationComponent,
        ModalFormComponent,
        IconSortComponent,
        FormComponent,
        ModalComponent,
        DynamicFieldDirective
      ],
      providers: [HttpClient, HttpHandler, HomeService],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    router = jasmine.createSpyObj('router', ['navigate']);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data with like search text ', () => {
    const service: HomeService = TestBed.get(HomeService);
    service.customerData = [{type: 1, country: 'Sweden', name: ' Michael'}];

    component.clientSideSearch('Mich', [{'name': 'name'}]);
    expect(component.customerData.length).toBe(1);

  });

  it('should sort the record in ascending order ', () => {
    component.customerData = [{type: 1, country: 'Sweden', name: 'Michael'}, {type: 1, country: 'Sweden', name: 'Dpenha'}];

    component.triggerSort({dataIndex: 'name', enableSorting: true, sortingDirection: 'asc', order: 1, displayTitle: 'Name', display: true});

    const firstRec = component.customerData[0];
    expect(firstRec['name']).toBe('Dpenha');

  });

  it('should perform deep copy on customer data', () => {
    const service: HomeService = TestBed.get(HomeService);

    service.customerData = [{type: 1, country: 'Sweden', name: 'Michael'}, {type: 1, country: 'Sweden', name: 'Dpenha'}];

    component.populateCustomersData ();

    const isEqual = component.customerData === service.customerData;

    expect(isEqual).toBe(false);
  });

  it('should pass the record to the modal on click', () => {
    const service: AppConfigService = TestBed.get(AppConfigService);
    service.refData = {CustomerForms: [
      {
        CustomerType: 1,
        type: 'input',
        name: 'name'
      }, {
        CustomerType: 2,
        type: 'input',
        name: 'name'
      }]};

    component.editRecord({type: 1, country: 'Sweden', name: 'Michael'});

    expect(component.fields.length).toBe(1);
  });
});
