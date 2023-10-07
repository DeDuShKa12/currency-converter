import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {CurrencyRateInterface, ExchangeRateInterface} from "../interfaces/currency.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }


  getExchangeRate(fromCurrency:string, toCurrency:string):Observable<ExchangeRateInterface> {
    return this.httpClient.get<ExchangeRateInterface>(urls.pair(fromCurrency, toCurrency))
  }

  getCurrentCurs():Observable<CurrencyRateInterface> {
    return this.httpClient.get<CurrencyRateInterface>(urls.UAHCurs)
  }

}
