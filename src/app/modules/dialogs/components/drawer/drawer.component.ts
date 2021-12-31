import {Component, Input, OnInit} from '@angular/core';
import {DialogsService} from '../../dialogs.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent<T> implements OnInit {
  display = true;
  @Input() title: string;

  constructor(private dialogsService: DialogsService<T>) {
  }

  ngOnInit(): void {
  }

  async close(): Promise<void> {
    this.display = false;
    await this.dialogsService.close();
  }
}
