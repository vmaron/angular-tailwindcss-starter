import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-value-text-input',
  templateUrl: './multiple-value-text-input.component.html',
  styleUrls: ['./multiple-value-text-input.component.scss']
})
export class MultipleValueTextInputComponent implements OnInit {
  @Input() values: string[] = [];
  @Input() placeholder = 'Enter values separate them with COMMA, ENTER or SEMICOLON.';
  @Output() onItemAdded = new EventEmitter<{ value: string, newValues: string[] }>();
  @Output() onItemDeleted = new EventEmitter<{ value: string, newValues: string[] }>();

  value = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleRemoveItem(value: string) {
    const currentValues = this.values;
    const newValues = currentValues.filter(v => v !== value);
    this.onItemDeleted.emit({value, newValues});
    this.values = newValues;
  }

  handleKeyDown($event: KeyboardEvent) {
    if ($event.key === 'Enter' || $event.key === ',' || $event.key === ';') {
      $event.preventDefault();
      this.handleItemAdd(this.value);
    }
  }

  handleItemAdd(value: string) {
    if (this.values.includes(value) || !value) {
      this.value = '';
      return;
    }
    const newValues = this.values.concat(value);
    this.values = newValues;
    this.value = '';
    this.onItemAdded.emit({value, newValues});
  }

  handleBlur($event: FocusEvent) {
    $event.preventDefault();
    this.handleItemAdd(this.value);
  }
}
