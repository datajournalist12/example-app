import { Component, OnInit } from '@angular/core';
import { DATA } from '../data/ticker_symbols';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: MessageService) { }

  data: any;
  stock: any;
  stock_is_true: any;
  api_data: any;

  ngOnInit(): void {
    this.data = DATA;
    console.log(this.data)
  }

  onStock(event: any) {
    this.stock = event.target.value

    if (this.data.includes(event.target.value.toUpperCase()) === true && event.target.value.length > 0) {
      this.stock_is_true = true;
    } else {
      this.stock_is_true = false;
    }
  }


  getStocks() {
    this.http.getUrl('https://api.openbrewerydb.org/breweries?by_state=missouri&sort=type,-name')
    .subscribe(x => {this.api_data = x, console.log(x), console.log("Hello world!")})
  }

}
