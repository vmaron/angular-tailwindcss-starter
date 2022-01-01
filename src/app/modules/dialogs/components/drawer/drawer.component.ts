import {Component, Input, OnInit} from '@angular/core';
import {DialogsService} from '../../dialogs.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent<T> implements OnInit {
  drawerState = 'slide-out';
  @Input() title: string;

  constructor(private dialogsService: DialogsService<T>) {
  }

  ngOnInit(): void {
    setTimeout(async () => this.toggle());
  }

  toggle() {
    this.drawerState = this.drawerState === 'slide-out' ? 'slide-in' : 'slide-out';
  }

  async close(): Promise<void> {
    this.toggle();
    setTimeout(async () => await this.dialogsService.close(), 750);
  }
}
