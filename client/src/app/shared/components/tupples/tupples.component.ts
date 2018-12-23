// could have used Customer interface but to make it generic used any
// could have used column interface but to make it generic used any

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tupples',
  templateUrl: './tupples.component.html',
  styleUrls: ['./tupples.component.less']
})
export class TupplesComponent implements OnInit {
  @Input() config: any[];
  @Input() data: any[];
  @Output() editData = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit() {}
  /*
   *
   * populateValue(item,cfg)
   * */
  public populateValue = (item: any[], cfg: any[]): string => {
    let result: string;
    const val: any = item[cfg['dataIndex']];
    if (cfg['indexType'] === 'date') {
      const dateVal = new Date(val.split('T')[0]);
      result = moment(dateVal).format(cfg['displayFormat']);
    } else if (cfg['dataIndex'] === 'action') {
      result = '';
    } else {
      result = val ? val : 'NA';
    }

    return result;
  }
  /**
   * addTypeBg
   */
  public addTypeBg = (item: any[]): string => {
    return `row tupple_bg_${item['type']}`;
  }
  /**
   * actionClick
   */
  public actionClick = (item: any, cfg: any) => {
    if (cfg['actionClass']) {
      this.editData.emit(item);
    }
  }
}
