import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FieldConfig } from '../../interface';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
//   component.field = {
//     minDate : new Date(),
//     type: '2',
//     maxDate: new Date()
//   };
//   component.formGroup = new FormGroup({
//     name: new FormControl()
//  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponent ],
      imports: [FormsModule, ReactiveFormsModule, NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
  //   component.field = {
  //     minDate : new Date(),
  //     type: '2',
  //     maxDate: new Date()
  //   };
  //   component.formGroup = new FormGroup({
  //     name: new FormControl()
  //  });
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should set configuraton on date', () => {
  //   component.field = {
  //     minDate : new Date(),
  //     type: '2',
  //     maxDate: new Date('12/31/2018')
  //   };
  //   component.formGroup = new FormGroup({
  //     name: new FormControl()
  //  });
  //  component.formGroup.get('name').value = '2018-12-26T00:00:00';
  //   component.configureDate();

    expect(component.isValueValid).toBeTruthy();
  });
});
