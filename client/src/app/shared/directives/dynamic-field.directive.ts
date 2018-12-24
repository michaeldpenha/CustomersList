import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import {FormGroup} from '@angular/forms';

import { FieldConfig } from '../interface';
import { InputComponent, SelectComponent, RadiobuttonComponent } from '../components';
import { DateComponent } from '../components/date/date.component';

const wrapper = {
  input : InputComponent,
  select : SelectComponent,
  dateTimePicker: DateComponent,
  radio: RadiobuttonComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(private _resolver: ComponentFactoryResolver, private _container: ViewContainerRef) { }

  ngOnInit() {
    const componentFactory = this._resolver.resolveComponentFactory(wrapper[this.field.type]);

    this.componentRef = this._container.createComponent(componentFactory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
