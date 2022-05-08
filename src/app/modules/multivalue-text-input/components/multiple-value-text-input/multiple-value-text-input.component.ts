import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-multiple-value-text-input',
  templateUrl: './multiple-value-text-input.component.html',
  styleUrls: ['./multiple-value-text-input.component.scss']
})
export class MultipleValueTextInputComponent implements OnInit {
  @ViewChild('input') input;
  @Input()
  get values(): string[] {
    return this._values;
  }

  set values(value: string[]) {
    this._values = value;
  }
  private _values: string[] = [];

  @Output() onItemAdded = new EventEmitter<{ value: string, newValues: string[] }>();
  @Output() onItemDeleted = new EventEmitter<{ value: string, newValues: string[] }>();

  value = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleRemoveItem(value: string) {
    const currentValues = this._values;
    const newValues = currentValues.filter(v => v !== value);
    this.onItemDeleted.emit({value, newValues});
  }

  handleKeyDown($event: KeyboardEvent) {
    if ($event.key === 'Enter' || $event.key === ',' || $event.key === ';') {
      $event.preventDefault();
      this.handleItemAdd(this.value);
    }
  }

  handleItemAdd(value: string) {
    if (this._values.includes(value) || !value) {
      this.value = '';
      return;
    }
    const newValues = this._values.concat(value);
    this.value = '';
    this.onItemAdded.emit({value, newValues});
  }

  handleBlur($event: FocusEvent) {
    $event.preventDefault();
    this.handleItemAdd(this.value);
  }

  handleContainerClick($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.input.nativeElement.focus();
  }
}
