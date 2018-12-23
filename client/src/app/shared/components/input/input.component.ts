import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

import { FieldConfig } from './../../interface/field.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  private field: FieldConfig;
  private group: any;

  constructor() { }

  ngOnInit() {
  }
}
