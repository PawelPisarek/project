import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ValuePriceDataModel} from '../value-price-data.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-value-form',
  templateUrl: './value-form.component.html',
  styleUrls: ['./value-form.component.scss']
})
export class ValueFormComponent implements OnInit {

  @Input() valuePrice: number;
  form = new FormControl();
  @Output() addConversion = new EventEmitter<ValuePriceDataModel>();

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.addConversion.emit(new ValuePriceDataModel(String(this.form.value), String(this.valuePrice), Date.now()));
  }
}
