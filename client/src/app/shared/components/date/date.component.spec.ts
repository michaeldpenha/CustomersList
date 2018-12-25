import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FieldConfig } from '../../interface';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let field: FieldConfig;
  let formGroup: FormGroup;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponent ],
      imports: [FormsModule, ReactiveFormsModule, NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    field = {
      minDate : new Date(),
      type: '2',
      maxDate: new Date()
    };
    formGroup = new FormGroup({
      name: new FormControl()
   });
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
