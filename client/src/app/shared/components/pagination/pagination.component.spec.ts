import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.count = 10 ;
    component.perPage = 10;
    component.page = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retun Min', () => {
    expect(component.getMin()).toBe(1);
  });

  it('should retun Max', () => {
    expect(component.getMax()).toBe(10);

    component.count = 9 ;
    expect(component.getMax()).toBe(9);
  });

  it('should calculate current page count on page', () => {
    component.count = 10 ;
    component.perPage = 5;
    component.page = 1;

    component.onPage(2);
    expect(component.currentPageCount).toBe(10);

    component.onPrev();
    expect(component.currentPageCount).toBe(5);

    component.onNext();
    expect(component.currentPageCount).toBe(10);

    component.onPageSelect([2]);
    expect(component.currentPageCount).toBe(4);

    expect(component.defaultValueSelection(5)).toBeNull();


  });
});
