import { Component, OnInit } from '@angular/core';
import { DATA } from '../data/ticker_symbols';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  data: any;

  ngOnInit(): void {
    this.data = DATA;
    console.log(this.data)
  }

}
