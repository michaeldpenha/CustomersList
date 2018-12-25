import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TupplesComponent } from './tupples.component';
import * as moment from 'moment';

describe('TupplesComponent', () => {
  let component: TupplesComponent;
  let fixture: ComponentFixture<TupplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TupplesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TupplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should poulate value', () => {
    expect(
      component.populateValue({ name: 'Michael' }, {
        indexType: 'text',
        dataIndex: 'name'
      })
    ).toBe('Michael');
    expect(
      component.populateValue({ name: '2018-12-26T00' }, {
        indexType: 'date',
        dataIndex: 'name',
        displayFormat: 'DD-MM-YYYY'
      })
    ).toBe(moment(new Date('2018-12-26')).format('DD-MM-YYYY'));
    expect(
      component.populateValue({ name: 'Michael' }, {
        indexType: 'text',
        dataIndex: 'action'
      })
    ).toBe('');
  });

  it('should return appropriate bg image', () => {
    expect(component.addTypeBg({type : 1})).toBe('row tupple_bg_1');
  });
});
