import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  amount1: number = 1;
  amount2!: number;
  currency1: string = "USD";
  currency2: string = "UAH";
  exchangeRate: number = 0;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.getExchangeRate(this.currency1, this.currency2).subscribe(data => {
      this.exchangeRate = data.conversion_rate;
      this.onAmount1Change()
    })

  }

  onCurrencyChange(): void {
    this.currencyService.getExchangeRate(this.currency1, this.currency2).subscribe(data => {
      this.exchangeRate = data.conversion_rate;
      this.onAmount1Change();
      this.onAmount2Change();
    })
  }

  onAmount1Change(): void {
    this.amount2 = this.amount1 * this.exchangeRate
  }

  onAmount2Change(): void {
    this.amount1 = this.amount2 / this.exchangeRate
  }

}
