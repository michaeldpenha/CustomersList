import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.less']
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: any;
  constructor() {}
  ngOnInit() {}

}
