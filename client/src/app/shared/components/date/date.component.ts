import { Component, OnInit, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
// import { DatePickerComponent } from 'gijgo-angular-wrappers';
// import * as types from 'gijgo';
import { FieldConfig } from '../..';
import {NgbDateStruct, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { formatDatePicker } from '../../utils/utils';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less'],
  providers: [NgbDatepickerConfig]
})
export class DateComponent implements OnInit, OnChanges {
  // @ViewChild('datepicker') datepicker: DatePickerComponent;
  // configuration: types.DatePickerSettings;
  private field: FieldConfig;
  private group: any;
  private defaultStartDate =  {year: 1990, month: 1, day: 1};
  private defaultEndDate =  {year: 2099, month: 12, day: 31};

  constructor(public dateConfig: NgbDatepickerConfig) {
    // this.configureDate();
   }

  ngOnInit() {
  }
  ngOnChanges (changes: SimpleChanges) {
    if (changes['field']) {
    if (this.field) {this.configureDate(); }
    }
  }
  configureDate = () => {
    this.dateConfig.minDate = this.field.minDate ? formatDatePicker(this.field.minDate) : this.defaultStartDate;
    this.dateConfig.maxDate = this.field.maxDate ? formatDatePicker(this.field.maxDate) : this.defaultStartDate;
  }
}
