import { Component, OnInit, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { FieldConfig } from '../..';
import {NgbDateStruct, NgbCalendar, NgbDatepickerConfig, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { formatDatePicker, dateObjectFromPickerObj } from '../../utils/utils';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less'],
  providers: [NgbDatepickerConfig]
})
export class DateComponent implements OnInit {
  private field: FieldConfig;
  private group: any;
  date: NgbDateStruct;
  defaultDate: Date;
  isValueValid = false;
  readonly = true;
  placeholder = 'YYYY-MM-DD';
  private defaultStartDate =  {year: 1990, month: 1, day: 1};
  private defaultEndDate =  {year: 2099, month: 12, day: 31};

  constructor(public dateConfig: NgbDatepickerConfig) {}

  ngOnInit() {
    this.date = null;
    this.configureDate();
  }

  configureDate = () => {
    this.dateConfig.minDate = this.field.minDate ? formatDatePicker(this.field.minDate) : this.defaultStartDate;
    this.dateConfig.maxDate = this.field.maxDate ? formatDatePicker(this.field.maxDate) : this.defaultEndDate;
    this.defaultDate = this.group.get(this.field.name).value.split('T')[0];
    this.date = formatDatePicker(new Date(this.defaultDate));
    this.dateValidation();
  }

  dateValidation = () => {
    const valueDate = moment(dateObjectFromPickerObj(this.date));
    const minDate = moment(this.field.minDate);
    const diff = moment.duration(valueDate.diff(minDate));

    this.isValueValid = diff.asDays() < 0;
    if (this.isValueValid) {
      this.date = null;
    }
  }

  onDateSelection = (date: NgbDate) => {
     this.dateValidation();
  }
}
