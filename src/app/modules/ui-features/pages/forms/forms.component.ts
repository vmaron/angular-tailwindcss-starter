import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  values: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.values = ['Red', 'Blue', 'Green'];
  }

  handleItemAdded($event: {value: string; newValues: string[]}) {
    this.values = $event.newValues;
  }

  handleItemDeleted($event: { value: string; newValues: string[] }) {
    this.values = $event.newValues;
  }
}
