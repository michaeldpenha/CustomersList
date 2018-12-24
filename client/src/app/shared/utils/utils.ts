import { DateConfig } from '../interface';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export const deepCopy = (parentObj: any): any => {
  let cloneObject = parentObj;

  if (parentObj && typeof parentObj === 'object') {
    cloneObject =
      Object.prototype.toString.call(parentObj) === '[object Array]' ? [] : {};
    for (const i in parentObj) {
      if (parentObj[i]) {
        cloneObject[i] = deepCopy(parentObj[i]);
      }
    }
  }

  return cloneObject;
};

export const sortData = (data: any, direction: boolean , fieldName?: string) => {
  const algo = (l: any, r: any) => {
    return l > r ? (direction ? 1 : -1) : l < r ? (direction ? -1 : 1) : 0;
  };

  return data.sort((a: any, b: any) => {
    return fieldName ? algo(a[fieldName], b[fieldName]) : algo(a, b);
  });
};

export const filterRecord = (data: any , dataIndex: string, val: any) => {
  return data.filter(el => {
    return el[dataIndex] === val;
  });
};

export const formatDatePicker = (date: Date): DateConfig => {
  return {
    year: Number(moment(date).format('YYYY')),
    month: Number(moment(date).format('MM')),
    day: Number(moment(date).format('DD')),
  };
};

export const dateObjectFromPickerObj = (obj: NgbDateStruct): Date => {
  return new Date(`${obj.month}/${obj.day}/${obj.year}`);
};
