import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() buttonText: string;
  @Output() triggeSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * triggerSearch
   */
  public triggerSearch = (val: string) => {
    this.triggeSearch.emit(val);
  }
}
