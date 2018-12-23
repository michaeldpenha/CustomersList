import { Validators } from '@angular/forms';

export const CustomValidation = {
  positiveNumber: Validators.pattern('^[1-9][0-9]*$'),
  required: Validators.required
};
