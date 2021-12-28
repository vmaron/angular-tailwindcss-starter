import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-legend-value-card',
  templateUrl: './legend-value-card.component.html',
  styleUrls: ['./legend-value-card.component.scss']
})
export class LegendValueCardComponent implements OnInit {

  @Input() legend: string;
  @Input() value: string;
  constructor() { }

  ngOnInit(): void {
  }

}
