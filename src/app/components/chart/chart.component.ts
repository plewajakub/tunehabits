import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data = {
      datasets: [{
        data: [20, 10],
      }],
      labels: ['a', 'b']
  }

  options = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
