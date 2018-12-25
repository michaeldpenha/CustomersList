import { DynamicFieldDirective } from 'src/app/shared';
import { ModalComponent } from './../../../../shared/components/modal/modal.component';
import { FormComponent } from './../../../../shared/components/form/form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ModalFormComponent } from './modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ModalFormComponent', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ ModalFormComponent, FormComponent, ModalComponent, DynamicFieldDirective ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
