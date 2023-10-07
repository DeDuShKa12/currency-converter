import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {CurrencyRateInterface} from "../../interfaces/currency.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rates: CurrencyRateInterface;

  constructor(readonly currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.getCurrentCurs().subscribe(data => this.rates = data)
  }
}
