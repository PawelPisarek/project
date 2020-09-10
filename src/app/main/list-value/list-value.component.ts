import {Component, Input, OnInit} from '@angular/core';
import {ValuePriceDataModel} from '../value-price-data.model';

@Component({
  selector: 'app-list-value',
  templateUrl: './list-value.component.html',
  styleUrls: ['./list-value.component.scss']
})
export class ListValueComponent implements OnInit {

  @Input() list: ValuePriceDataModel[];
  constructor() { }

  ngOnInit() {
  }

}
