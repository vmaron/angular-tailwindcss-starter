import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-value-text-input-item',
  templateUrl: './multiple-value-text-input-item.component.html',
  styleUrls: ['./multiple-value-text-input-item.component.scss']
})
export class MultipleValueTextInputItemComponent implements OnInit {
  @Input() value: string;
  @Output() handleItemRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick($event: MouseEvent) {
    $event.preventDefault();
    this.handleItemRemove.emit(this.value);
  }
}
