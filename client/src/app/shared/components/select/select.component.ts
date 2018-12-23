import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../..';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: any;
  constructor() {}
  ngOnInit() {}
}
