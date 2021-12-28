import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {ChartModule} from 'angular2-chartjs';
import {LineChartComponent} from './components/line-chart/line-chart.component';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';


@NgModule({
  declarations: [PieChartComponent, LineChartComponent, BarChartComponent],
  exports: [
    PieChartComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class ChartingModule {
}
