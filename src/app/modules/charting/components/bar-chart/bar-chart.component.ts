import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chartOptions: any;
  chartData: any;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Shoes',
          backgroundColor: '#0694a2',
          // borderColor: window.chartColors.red,
          borderWidth: 1,
          data: [-3, 14, 52, 74, 33, 90, 70],
        },
        {
          label: 'Bags',
          backgroundColor: '#7e3af2',
          // borderColor: window.chartColors.blue,
          borderWidth: 1,
          data: [66, 33, 43, 12, 54, 62, 84],
        },
      ],
    };
    this.chartOptions = {
      responsive: true,
      legend: {
        display: false,
      },
    };
  }

}
