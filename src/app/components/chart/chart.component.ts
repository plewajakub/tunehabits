import { Component, OnInit } from '@angular/core';
import {chart}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data = {};
  options = {};


  constructor() { }

  ngOnInit(): void {
  }

}
