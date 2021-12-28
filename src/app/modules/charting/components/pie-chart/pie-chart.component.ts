import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  chartOptions: any;
  chartData: any;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      datasets: [
        {
          data: [33, 33, 33],
          /**
           * These colors come from Tailwind CSS palette
           * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
           */
          backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
          label: 'Dataset 1',
        },
      ],
      labels: ['Shoes', 'Shirts', 'Bags'],
    };
    this.chartOptions = {
      responsive: true,
      cutoutPercentage: 80,
      /*
       * Default legends are ugly and impossible to style.
       * See examples in charts.html to add your own legends
       */
      legend: {
        display: false,
      },
    };
  }

}
