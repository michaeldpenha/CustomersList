import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSortComponent } from './icon-sort.component';

describe('IconSortComponent', () => {
  let component: IconSortComponent;
  let fixture: ComponentFixture<IconSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
