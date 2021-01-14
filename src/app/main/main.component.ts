import { Component, OnInit } from '@angular/core';
import { DATA } from '../data/ticker_symbols';
import { MessageService } from '../message.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: MessageService,
              public dialog: MatDialog) { }

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

    var url_pt1 = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
    var url_pt2 = "&outputsize=full&apikey=BQCUKE3R9K0EQ76H"

    this.http.getUrl(url_pt1 + this.stock + url_pt2).subscribe(x => {this.api_data = x, console.log(x)})

    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
