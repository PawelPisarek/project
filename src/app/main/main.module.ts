import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueFormComponent } from './value-form/value-form.component';
import { ListValueComponent } from './list-value/list-value.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ValueFormComponent, ListValueComponent],
  exports: [
    ValueFormComponent,
    ListValueComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
