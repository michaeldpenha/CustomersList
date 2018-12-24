import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() buttonText: string;
  @Output() triggeSearch = new EventEmitter<string>();

  private _searchString = new Subject<string>();
  constructor() { }

  ngOnInit() {
    this.triggerSearchEvent();
  }

  /**
   * triggerSearch
   */
  public triggerInputSearch = (val: string) => {
    this._searchString.next(val);
  }

  public emitSearch = (val: string) => {
    this.triggeSearch.emit(val);
  }
  /**
   * trigger search event
   */
  public triggerSearchEvent = () => {
    this._searchString.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(val => this.emitSearch(val));
  }
}
