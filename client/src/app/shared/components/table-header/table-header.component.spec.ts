import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderComponent } from './table-header.component';
import { IconSortComponent } from '../icon-sort';

describe('TableHeaderComponent', () => {
  let component: TableHeaderComponent;
  let fixture: ComponentFixture<TableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeaderComponent, IconSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate pointer class', () => {
    expect(component.populateClass({
      enableSorting : true,
      className : 'col-md-12'
    })).toBe('col-md-12 mouse-pointer');

  });

  it('should trigger sort', () => {
    const col = {sortingDirection : 'asc',
    dataIndex : 'name',
    enableSorting : true
  };
    component.triggerClick(col);

    expect(component.sortedDataIndex).toBe('name');

    expect(component.sortIcon(col)).toBe('fa fa-sort-desc');
  });
});
