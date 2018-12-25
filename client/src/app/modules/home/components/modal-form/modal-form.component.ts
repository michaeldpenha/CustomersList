import { HomeService } from './../../services/home.service';
import { ModalService } from './../../../../shared/components/modal/modal.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';

import { Customer, FieldConfig } from './../../../../shared/interface';
import { CustomValidation } from 'src/app/shared/utils/validators';
import { dateObjectFromPickerObj } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.less']
})
export class ModalFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[];
  @Input() data: Customer[];
  @Input() openModal: true;
  @Output() fetchCustomerData = new EventEmitter<any>();
  form: FormGroup;
  modalText = 'Edit Customer';

  constructor(private _fb: FormBuilder, private _modalService: ModalService, private _homeService: HomeService) {}

  ngOnInit() {}
  /**
   * This method will trigger when any of the input arguments changes
   *
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['fields']) {
      this.form = this.fields ? this._createControl() : null;
    }
  }

  private _createControl = () => {
    const group = this._fb.group({});
    this.fields.forEach(field => {
      const control = this._fb.control(
        this.data[field.name] !== undefined ? this.data[field.name] : field.value !== undefined ? field.value : '',
        this._bindValidations(field.validations || [])
      );

      group.addControl(field['name'], control);
    });
    this.openModalInstance('form-modal');
    return group;
  }

  private _bindValidations = (validations: any) => {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        if (CustomValidation[valid.validator]) {
          valid.validator = CustomValidation[valid.validator];
          validList.push(valid.validator);
        }
      });

      return Validators.compose(validList);
    }

    return null;
  }

  public validateAllFormFields = (group: FormGroup) => {
    Object.keys(group.controls).forEach(field => {
      const control = group.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  openModalInstance(id: string) {
    this._modalService.open(id);
  }

  closeModalInstance(id: string) {
    this._modalService.close(id);
  }

  modalClose = (obj: any) => {
    this.fields = null;
  }

  public submitData = (e: any) => {
    const values: Customer = this.form.value;
    values.contractExpiryDate = dateObjectFromPickerObj(values.contractExpiryDate).toISOString();
    this._homeService.updateCustomerInfo(this.form.value).subscribe((res: any) => {
      this._modalService.close('form-modal');
      this.fetchCustomerData.emit(true);
    });
  }
}
