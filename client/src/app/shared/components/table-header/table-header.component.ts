import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.less']
})
export class TableHeaderComponent implements OnInit {
  @Input() items: any[];
  @Output() triggerSort = new EventEmitter<any>();
  sortedDataIndex: string;
  constructor() { }

  ngOnInit() {
  }

  /**
   * populateClass
   */
  public populateClass = (col: any): string => {
    let result: string;
    result = (col.className) ? col.className : 'col-auto';
    result = col.enableSorting ? `${result} mouse-pointer` : result;
    return result;
  }

  /**
   * triggerClick
   */
  public triggerClick = (col: any) => {
    if (col.enableSorting) {
      col.sortingDirection = col.sortingDirection.toLowerCase() === 'asc' ? 'desc' : 'asc';
      this.sortedDataIndex = col.dataIndex;
      this.triggerSort.emit(col);
    }
  }
  /**
   * sortIcon
   */
  public sortIcon = (col: any): string => {
    let result: string;
    const dataIndexMatched: boolean = this.sortedDataIndex === col.dataIndex;
    const direction: string = col.sortingDirection.toLowerCase();
    if (dataIndexMatched && direction === 'asc') {
      result = 'fa fa-sort-asc';
    } else if (dataIndexMatched && direction === 'asc') {
      result = 'fa fa-sort-desc';
    } else {
      result = 'fa fa-sort';
    }

    return result;
  }

}
