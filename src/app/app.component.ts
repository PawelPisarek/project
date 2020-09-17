import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, interval} from 'rxjs';
import {ValuePriceDataModel} from './main/value-price-data.model';
import {map} from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  list$ = new BehaviorSubject([]);
  title = 'project';
  priceValue$ = interval(1000).pipe(map(newPrice => {
    return Math.random() * (4.57 - 4.2) + 4.2;
  }));

  saveConversion($event: ValuePriceDataModel) {
    this.list$.next([$event, ...this.list$.getValue()]);
  }

  ngOnInit(): void {
    registerLocaleData(localePl);
  }

}
