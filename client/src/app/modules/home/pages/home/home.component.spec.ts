import { ModalComponent } from './../../../../shared/components/modal/modal.component';
import { FormComponent } from './../../../../shared/components/form/form.component';
import { ModalFormComponent } from './../../components/modal-form/modal-form.component';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
import { TupplesComponent } from './../../../../shared/components/tupples/tupples.component';
import { TableHeaderComponent } from './../../../../shared/components/table-header/table-header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchComponent, IconSortComponent, DynamicFieldDirective } from 'src/app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
class RouterStub {
  navigateByUrl(url: string) { return url; }
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
        providers: [HttpClient, HttpHandler, {provide: Router, useClass: RouterModule}],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    router = jasmine.createSpyObj('router', ['navigate']);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
