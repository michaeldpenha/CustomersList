import { DateComponent } from './../../shared/components/date/date.component';
import { ModalComponent } from './../../shared/components/modal/modal.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  InputComponent,
  SelectComponent,
  IconSortComponent,
  SearchComponent,
  PaginationComponent,
  TupplesComponent,
  TableHeaderComponent,
  RadiobuttonComponent
} from '../../shared/components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeService } from './services/home.service';
import { ModalFormComponent } from './components';
import { DynamicFieldDirective } from 'src/app/shared';

@NgModule({
  declarations: [
    SearchComponent,
    DynamicFieldDirective,
    IconSortComponent,
    PaginationComponent,
    TupplesComponent,
    TableHeaderComponent,
    ModalComponent,
    HomeComponent,
    ModalFormComponent,
    InputComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeRoutingModule,
    NgbModule.forRoot()],
  entryComponents: [
    InputComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent
  ],
  providers: [HomeService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
