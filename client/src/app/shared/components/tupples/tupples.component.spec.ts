import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TupplesComponent } from './tupples.component';

describe('TupplesComponent', () => {
  let component: TupplesComponent;
  let fixture: ComponentFixture<TupplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TupplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TupplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
